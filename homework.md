[p5.js 과목 5차 과제]

    마감일: 6/8 오후 11:59
    점수 5
    제출물 유형 웹사이트 URL

과제

    지금까지 수행한 과제 1~4 작품을 웹 사이트에 게시해보자.
    과제 수정은 가능하나, 앞서 제출한 과제의 마이너한 수정이어야 한다.

제출 파일

    제출물 : Github Pages URL
    코멘트 ( 간략하게 작성 )
        사용한 핵심 AI · 프롬프트 ( 옵션, AI 필수 사용 아님 )
        사용한 핵심 HTML · CSS · Javascript

요구 사항

    정적/동적인 작품을 사이트 접속 시, 바로 확인할 수 있어야 한다.
    2행 2열 구조로 정적 → 동적 순으로 나열되어야 한다.
        과제 1 | 과제 4과제 2 | 과제 3
    심미성을 위한 노력이 포함되어야 한다. ( 이를 위한 AI 활용 가능 )
        제목이나 과제 소개 등 2행 2열 구조 이외의 코드를 작성하여도 된다. ( 단, 다른 과제를 첨부하지 말 것 / ex. 블록깨기게임 )
    다음의 경우 0점 처리한다.
        텍스트에 프로젝트 링크만 걸어 놓은 경우 ( 채점 시, 각 과제를 눌러서 열어보아야 하는 경우 )
        빈 페이지 혹은 열리지 않는 URL을 제출한 경우 ( 과제 수행 중 어려운 부분이 있다면, Q&A 게시판 비밀글을 적극 활용하기 )
        유니북 교재의 코드 혹은 하단 [참고] 코드를 그대로 제출한 경우 ( 심미성을 위한 노력이 포함되지 않은 경우 )

제약 사항

    반드시 URL로 제출 필요
        교재의 "6. GitHub Pages로 p5.js 프로그램 웹사이트 만들기"를 참고하세요.
    모든 제출물을 성적 공개 시기까지 유지해주세요.

문의 사항

과제 3부터 비전공자 학생들이 많은 어려움을 겪습니다.

과제 기간을 연장하였으니, 비주얼 포트폴리오를 꼭 완성해보세요.

중간에 어려운 점이 생긴다면 포기하지 말고 다음 문의 시트에 문의사항을 남겨주세요. ( 주차는 13주차로 설정 )

과제 코드를 기반으로 문의하는 경우, Github Repogitory URL을 Public(공개)로 설정한 뒤 Q&A 게시판에 비밀글로 작성해주세요.

https://docs.google.com/spreadsheets/d/1_EvIzm-AQwE745ghbxg8oZKHtSymMBsovDim_4z8otg/edit?gid=0#gid=0 (외부 사이트로 연결합니다.)

[ 참고 : 폴더/파일 구조 ]

p5js/

├── index.html            ← Top 페이지 (2×2 카드 그리드)

├── style.css                ← Top 페이지 스타일

├── sample1/              ← 과제 1

│   ├── index.html

│   ├── sketch.js

│   └── style.css

├── sample2/              ← 과제 2

│   ├── index.html

│   ├── sketch.js

│   └── style.css

├── sample3/              ← 과제 3

│   ├── index.html

│   ├── sketch.js

│   └── style.css

└── sample4/              ← 과제 4

├── index.html

├── sketch.js

└── style.css

[ 참고 : index.html ]

<!DOCTYPE html>

<html lang="ko">

<head>

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>p5.js 작품 모음</title>

<style>

    {

margin: 0;

padding: 0;

box-sizing: border-box;

}

body {

display: flex;

flex-direction: column;

align-items: center;

min-height: 100vh;

padding: 24px;

background: #f5f5f5;

}

h1 {

margin-bottom: 20px;

font-size: 1.6rem;

}

#projects {

display: grid;

grid-template-columns: 1fr 1fr;

width: 100%;

max-width: 600px;

gap: 12px;

}

#projects .cell {

aspect-ratio: 16 / 9;

position: relative;

overflow: hidden;

border: 1px solid #ccc;

border-radius: 8px;

}

#projects .cell iframe {

position: absolute;

top: 0;

left: 0;

width: 600px;

height: 400px;

border: none;

transform-origin: top left;

transform: scale(0.5);

}

</style>

</head>

<body>

<h1>나의 p5.js 작품</h1>

<main id="projects">

<div class="cell">

<iframe src="sample1/index.html"></iframe>

</div>

<div class="cell">

<iframe src="sample4/index.html"></iframe>

</div>

<div class="cell">

<iframe src="sample2/index.html"></iframe>

</div>

<div class="cell">

<iframe src="sample3/index.html"></iframe>

</div>

</main>

</body>

</html>


온라인 교재 6강

https://unibook.co/book/9/section/812

아이디: 
jissoobin21@gmail.com

패스워드: gofldhffl0621 



1차 과제물

https://editor.p5js.org/jissoobin/full/ZGWhH-WeS


2차 과제물

https://editor.p5js.org/jissoobin/full/BURgHLmAo


3차 과제물 및 설명

[P5.js 프로젝트 URL] https://editor.p5js.org/jissoobin/full/gIJ1cx-ky

[인터랙션 설명] 키보드와 마우스 인터랙션을 통해 캐릭터가 말차라떼를 마시는 움직임을 구현하였다. M 또는 m 키를 누르면 음료를 마시는 동작이 시작되며, 실제로 마시는 것처럼 보이도록 애니메이션을 구성하였다. 빨대를 통해 음료를 마시는 느낌을 주기 위해 컵 내부의 초록색 액체 높이가 감소했다가 다시 증가하도록 설정하였다. 또한 캐릭터의 눈동자는 마우스 위치를 따라 움직인다. 눈동자의 이동 범위를 비교적 크게 설정하여 시선이 자연스럽게 흔들리도록 하였다. 이를 통해 음료를 음미하는 듯한 표정 변화와 생동감을 표현하였다.


4차 과제물 및 설명

[P5.js 프로젝트 URL] https://editor.p5js.org/jissoobin/full/rlfovJdaV

[인터랙션 설명] 한 달의 시간 흐름을 달의 움직임을 중심으로 표현하였다. 초승달부터 보름달까지 다섯 개의 달이 lerp를 통해 중앙으로 모였다가 다시 퍼지는 애니메이션을 구현하였다. 중앙에 모인 뒤에는 반달이 rotate와 TWO_PI 회전을 통해 돌아가게 하였고, 이는 열쇠구멍을 연상시켜서 시간의 순환성과 필연성을 드러내고자 하였다. 상단의 별들은 sin 함수를 이용해 크기가 주기적으로 변화하도록 하였으며, 이는 북서쪽에서 나침반처럼 방향을 안내하는 요소로 설정하였다. 배경은 background와 lerpColor를 활용해 점진적으로 어두워졌다가 다시 밝아지도록 했다. 이는 노을 혹은 해돋이에서 시작해 다시 어두워지는 하루의 낮과 밤을 표현하고자 했으며, 밤에는 완전히 검정색이 되도록 해서 달이 두드러지게 했다. cos 기반 easing을 적용해 달의 이동과 색 변화가 자연스럽게 이어지도록 구현하였다.
