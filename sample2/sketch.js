function setup(){
createCanvas(600,400);
background('#C1DBE8');//배경
fill('#FFF1B5'); stroke(0); // 별
  beginShape();
  vertex(166,-85); vertex(162,100); vertex(341,165);                 vertex(162,217); vertex(159,402);
  vertex(46,244); vertex(-142,293); vertex(-26,149);                 vertex(-129,-6); vertex(49,59);
  endShape(CLOSE);
  beginShape();
  vertex(470,18); vertex(485,61); vertex(533,61); vertex(495,89);   vertex(510,133);
  vertex(470,105); vertex(430,133); vertex(445,89);                 vertex(408,61); vertex(455,61);
  endShape(CLOSE);  
fill("#43302E"); //상의
  rect(130,310,340,150,70);
fill(252,233,219);  stroke(0);  strokeWeight(1.5); //얼굴 + 목
  line(265,270,265,310);
  line(335,270,335,310);
  arc(300,311.5,225,100,0,PI,CHORD);
noStroke(); //목가리기
  rect(266,270,68,50);
  stroke(0);
  strokeWeight(1.5);
  ellipse(300,175,200,220);
stroke(0);  strokeWeight(9);  line(338,308,375,345); //노란끈 선
  line(262,308,225,345);
stroke('#FFF1B5');  strokeWeight(5); //노란끈
  line(338,308,375,345);
  line(262,308,225,345);
fill(50);  stroke(0);  strokeWeight(1.5); //머리카락
  arc(300,80,90,100,PI,TWO_PI,CHORD);
  beginShape();
  vertex(200,150);
  bezierVertex(200,20,400,20,400,150);
  bezierVertex(380,100,220,100,200,135);
  endShape(CLOSE);
noFill();  strokeWeight(3); //옆머리
  bezier(210,242,185,258,235,266,210,285);
  bezier(390,237,415,253,365,261,390,280);
  bezier(300,100,350,125,215,140,230,160);//앞머리 한가닥
strokeWeight(5);//눈썹
  arc(260,165,45,15,radians(200),radians(340));
  arc(340,165,45,15,radians(200),radians(340));
fill(255);  strokeWeight(1.5); //눈흰자
  beginShape();
  vertex(235,190);
  bezierVertex(245,172,275,172,285,190);
  bezierVertex(275,208,245,208,235,190);
  endShape(CLOSE);
  beginShape();
  vertex(315,190);
  bezierVertex(325,172,355,172,365,190);
  bezierVertex(355,208,325,208,315,190);
  endShape(CLOSE);
noFill();  strokeWeight(3); //윗눈선
  beginShape();
  vertex(237.5,190);
  bezierVertex(247.5,175,272.5,175,282.5,190);
  endShape();
  beginShape();
  vertex(317.5,190);
  bezierVertex(327.5,175,352.5,175,362.5,190);
  endShape();
fill(0);  noStroke(); //동공
  ellipse(260,190,23);
  ellipse(340,190,23);
fill(255); //눈하이라이트
  ellipse(265,187,12);
  ellipse(345,187,12);
noFill();  stroke(0);  strokeWeight(3); //속눈썹
  bezier(240,183,235,183,233,176,236,171);
  bezier(245,182,240,182,239,176,242,171);
  bezier(360,183,365,183,367,176,364,171);
  bezier(355,182,360,182,361,176,358,171);  
  point(235,205);
noFill();  stroke(0);  strokeWeight(2); //코
  arc(300,218,18,16,radians(320),radians(80));
fill(255);  noStroke(); //코 하이라이트
  ellipse(304,217,5,9);
stroke(150,100,50);  strokeWeight(2); //주근깨
point(290,205);point(295,210);point(300,205);point(305,210);point(310,205);
stroke(0);  strokeWeight(1.5);  fill(180,80,80); //입
  ellipse(300,245,40,20);
fill(120,30,30); //입속
  ellipse(300,250,25,10);
noFill();  strokeWeight(15); //헤드셋 밴드
  arc(width/2,190,210,230,PI+0.2,TWO_PI-0.2);
strokeWeight(1.5);  fill(127,106,106); //헤드셋 이어컵
  rect(width/2-115,160,35,85,15);
  rect(width/2+80,160,35,85,15);
  arc(width/2-115,202,20,70,HALF_PI,PI+HALF_PI,CHORD);
  arc(width/2+115,202,20,70,PI+HALF_PI,HALF_PI,CHORD);
fill(255,255,255,150);  stroke(0); //컵
  quad(450,240,540,240,520,340,470,340);
fill(76,153,0,200); //음료 + 빨대
  quad(465,260,525,260,513,335,477,335);
  line(505,210,505,270);
  line(505,210,530,200);
}