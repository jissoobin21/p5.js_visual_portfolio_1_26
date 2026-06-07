#!/usr/bin/env bash
set -euo pipefail

REPO_OWNER="jisoobin"
REPO_NAME="p5.js_visual_portfolio_1_26"
BRANCH="main"

if ! command -v git >/dev/null 2>&1; then
  echo "git가 이 환경에 없습니다. 수동 배포 지침을 따르세요." >&2
  exit 1
fi

if [ -z "${GH_TOKEN:-}" ]; then
  echo "GH_TOKEN 환경변수( Personal Access Token )가 없습니다." >&2
  exit 1
fi

cat > /tmp/repo_url.txt <<EOF2
https://x-access-token:${GH_TOKEN}@github.com/${REPO_OWNER}/${REPO_NAME}.git
EOF2

if [ ! -d .git ]; then
  git init
  git checkout -b ${BRANCH}
  git remote add origin "$(cat /tmp/repo_url.txt)"
else
  git checkout -B ${BRANCH}
  git remote set-url origin "$(cat /tmp/repo_url.txt)"
fi

git add .
git commit -m "feat: complete p5.js portfolio for 과제 5" || true
git push -u origin ${BRANCH}

echo "push complete"
echo "Github Pages URL: https://docs.github.com/en/pages" 
echo "  저장소에서 Settings > Pages > Build and deployment: Source = GitHub Actions 또는 Deploy from a branch(main) 설정 필요"
