#!/usr/bin/env bash
set -euo pipefail

REPO_OWNER="jisoobin"
REPO_NAME="p5.js_visual_portfolio_1_26"
BRANCH="main"
MSG="feat: complete p5.js portfolio"

if [ -z "${GH_TOKEN:-}" ]; then
  echo "오류: GH_TOKEN 환경변수가 필요합니다."
  echo "예: export GH_TOKEN=ghp_xxx"
  exit 1
fi

API_BASE="https://api.github.com"
AUTH_HEADER=("Authorization: token ${GH_TOKEN}" "Accept: application/vnd.github+json" "X-GitHub-Api-Version: 2022-11-28")

repo_exists() {
  local code
  code=$(curl -sS -o /tmp/github_repo.json -w "%{http_code}" "${AUTH_HEADER[@]/#/-H}" "${API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}")
  [ "$code" = "200" ]
}

create_repo() {
  curl -sS -X POST "${API_BASE}/user/repos" \
    -H "${AUTH_HEADER[0]}" -H "${AUTH_HEADER[1]}" -H "${AUTH_HEADER[2]}" \
    -d "{\"name\":\"${REPO_NAME}\",\"private\":false,\"auto_init\":true}"
}

upload_file() {
  local rel_path=$1
  local local_path="/home/ji/work/jisoo/${rel_path}"
  local content sha payload api_url sha_code
  content=$(base64 -w 0 "$local_path")

  sha=""
  sha_code=$(curl -sS -o /tmp/file_get.json -w "%{http_code}" -H "${AUTH_HEADER[0]}" -H "${AUTH_HEADER[1]}" -H "${AUTH_HEADER[2]}" \
    "${API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${rel_path}?ref=${BRANCH}")

  if [ "$sha_code" = "200" ]; then
    sha=$(sed -n 's/.*"sha" : "\([^"]*\)".*/\1/p' /tmp/file_get.json | head -n 1)
    if [ -z "$sha" ]; then
      sha=$(sed -n 's/.*"sha":"\([^"]*\)".*/\1/p' /tmp/file_get.json | head -n 1)
    fi
  fi

  if [ -n "$sha" ]; then
    payload="{\"message\":\"$MSG\",\"branch\":\"${BRANCH}\",\"content\":\"$content\",\"sha\":\"$sha\"}"
  else
    payload="{\"message\":\"$MSG\",\"branch\":\"${BRANCH}\",\"content\":\"$content\"}"
  fi

  curl -sS -X PUT "${API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${rel_path}" \
    -H "${AUTH_HEADER[0]}" -H "${AUTH_HEADER[1]}" -H "${AUTH_HEADER[2]}" \
    -d "$payload" >/tmp/file_put.json
}

enable_pages() {
  curl -sS -X POST "${API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pages" \
    -H "${AUTH_HEADER[0]}" -H "${AUTH_HEADER[1]}" -H "${AUTH_HEADER[2]}" \
    -d "{\"source\":{\"branch\":\"${BRANCH}\",\"path\":\"/\"}}" >/tmp/pages.json || true

  curl -sS -X PUT "${API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/pages" \
    -H "${AUTH_HEADER[0]}" -H "${AUTH_HEADER[1]}" -H "${AUTH_HEADER[2]}" \
    -d "{\"source\":{\"branch\":\"${BRANCH}\",\"path\":\"/\"}}" >/tmp/pages.json || true
}

if repo_exists; then
  echo "저장소가 이미 존재합니다."
else
  echo "저장소 생성 중..."
  create_repo >/tmp/repo_create.json
  sleep 1
fi

# 업로드할 파일 목록(현재 디렉터리 기준)
while IFS= read -r file; do
  rel="${file#./}"
  if [ -f "$file" ]; then
    echo "업로드: $rel"
    upload_file "$rel"
  fi

done < <(find . -type f \
  -not -path './.git/*' \
  -not -path './.github/*' \
  -not -name '.DS_Store' \
  | sed 's#^./##')

enable_pages

cat <<EOF2
배포 완료 가능
예상 URL: https://jisoobin.github.io/p5.js_visual_portfolio_1_26/
EOF2
