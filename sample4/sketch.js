function setup() {
  createCanvas(600, 400);
}

function draw() {

  let cycle = frameCount % 600;

  let moveT = 0;
  let darkness = 0;
  let rotation = 0;

  let t;

  if (cycle < 180) {

    t = map(cycle, 0, 180, 0, 1);
    t = 0.5 - cos(t * PI) / 2;

    moveT = t;
    darkness = t;
  }

  else if (cycle < 360) {

    moveT = 1;
    darkness = 1;

    t = map(cycle, 180, 360, 0, 1);

    rotation = t * TWO_PI;
  }

  else {

    t = map(cycle, 360, 600, 1, 0);
    t = 0.5 - cos(t * PI) / 2;

    moveT = t;
    darkness = t;

    rotation = TWO_PI;
  }

  let c1 = lerpColor(color('#877FA8'), color(0), darkness);
  let c2 = lerpColor(color('#BD86A6'), color(0), darkness);
  let c3 = lerpColor(color('#D47E97'), color(0), darkness);
  let c4 = lerpColor(color('#F59193'), color(0), darkness);
  let c5 = lerpColor(color('#F9AE91'), color(0), darkness);

  let lineColor = lerpColor(
    color('#3E2723'),
    color('#2E3559'),
    darkness
  );

  background('#FFFFE5');

  stroke(lineColor);
  strokeWeight(3);

  fill(c1);
  rect(0, 0, 600, 100, 45);

  fill(c2);
  rect(0, 100, 600, 200);

  arc(140, 120, 320, 180, radians(180), radians(360), CHORD);
  arc(350, 120, 220, 200, radians(180), radians(360), CHORD);
  arc(520, 120, 300, 150, radians(180), radians(360), CHORD);

  arc(140, 145, 320, 180, radians(180), radians(360), CHORD);
  arc(350, 145, 220, 200, radians(180), radians(360), CHORD);
  arc(520, 145, 300, 150, radians(180), radians(360), CHORD);

  arc(140, 170, 320, 180, radians(180), radians(360), CHORD);
  arc(350, 170, 220, 200, radians(180), radians(360), CHORD);
  arc(520, 170, 300, 150, radians(180), radians(360), CHORD);

  fill(c3);
  rect(0, 200, 600, 150);

  quad(0, 200, 60, 120, 120, 200, 60, 220);
  quad(120, 200, 200, 120, 280, 200, 200, 250);
  quad(280, 200, 350, 120, 420, 200, 350, 230);
  quad(420, 200, 510, 120, 600, 200, 510, 220);

  fill(c4);

  rect(0, 280, 600, 120, 45);
  rect(0, 220, 200, 100, 30);
  rect(25, 245, 150, 50, 15);
  rect(260, 230, 130, 50, 50);
  rect(380, 215, 120, 150, 30);
  rect(470, 220, 200, 130, 80);
  rect(500, 245, 130, 80, 80);

  fill(c5);

  triangle(30, 400, 120, 320, 230, 400);
  triangle(180, 400, 330, 280, 470, 400);
  triangle(30, 450, 120, 360, 230, 450);
  triangle(180, 450, 330, 330, 470, 450);
  triangle(180, 480, 330, 370, 470, 490);

  triangle(410, 400, 520, 350, 570, 400);
  triangle(390, 430, 515, 380, 570, 430);

  fill('#FCF7BF');

  quad(80, 100, 88, 123, 80, 130, 72, 123);
  quad(105, 130, 87, 122, 80, 130, 87, 138);
  quad(80, 165, 88, 137, 80, 130, 72, 137);
  quad(55, 130, 73, 122, 80, 130, 73, 138);

  quad(530, 246, 536, 264, 530, 270, 524, 264);
  quad(550, 270, 536, 264, 530, 270, 536, 276);
  quad(530, 298, 536, 276, 530, 270, 524, 276);
  quad(510, 270, 524, 264, 530, 270, 524, 276);

  let star1 = 14 + sin(frameCount * 0.04) * 8;
  let star2 = 15 + sin(frameCount * 0.05 + 1) * 8;
  let star3 = 10 + sin(frameCount * 0.06 + 2) * 6;

  circle(20, 20, star1);
  circle(120, 45, star2);
  circle(190, 30, star3);

  let moon1X = lerp(90, 300, moveT);
  let moon1Y = lerp(300, 200, moveT);

  let moon2X = lerp(190, 300, moveT);
  let moon2Y = lerp(255, 200, moveT);

  let moon3X = 300;
  let moon3Y = 200;

  let moon4X = lerp(410, 300, moveT);
  let moon4Y = lerp(145, 200, moveT);

  let moon5X = lerp(520, 300, moveT);
  let moon5Y = lerp(100, 200, moveT);

  if (moveT < 0.985) {

    fill('#FCF7BF');
    circle(moon1X, moon1Y, 85);

    fill('#2E3559');
    ellipse(moon1X - 10, moon1Y, 70, 75);

    fill('#FCF7BF');
    circle(moon2X, moon2Y, 85);

    fill('#2E3559');
    ellipse(moon2X - 12, moon2Y, 55, 80);

    fill('#2E3559');
    circle(moon4X - 10, moon4Y, 85);

    fill('#FCF7BF');
    ellipse(moon4X, moon4Y, 65, 80);

    fill('#FCF7BF');
    circle(moon5X, moon5Y, 85);

    fill('#2E3559');
    ellipse(moon5X + 10, moon5Y, 70, 75);

    fill('#FCF7BF');
    circle(moon3X, moon3Y, 85);

    fill('#2E3559');

    arc(
      moon3X,
      moon3Y,
      85,
      85,
      radians(90),
      radians(270),
      CHORD
    );
  }

  else {

    push();

    translate(300, 200);
    rotate(rotation);

    fill('#FCF7BF');
    circle(0, 0, 85);

    fill('#2E3559');

    arc(
      0,
      0,
      85,
      85,
      radians(90),
      radians(270),
      CHORD
    );

    pop();
  }

  stroke(lineColor);
  strokeWeight(9);

  line(300, 145, 300, 20);
  line(332, 155, 430, 20);
  line(370, 205, 585, 215);
  line(360, 235, 560, 365);
  line(332, 245, 430, 355);
  line(300, 255, 300, 355);
  line(268, 245, 180, 385);
  line(240, 177, 20, 45);
  line(230, 200, 90, 185);
  line(268, 155, 210, 55);

  stroke('#FCF7BF');
  strokeWeight(3);

  line(300, 145, 300, 20);
  line(332, 155, 430, 20);
  line(370, 205, 585, 215);
  line(360, 235, 560, 365);
  line(332, 245, 430, 355);
  line(300, 255, 300, 355);
  line(268, 245, 180, 385);
  line(240, 177, 20, 45);
  line(230, 200, 90, 185);
  line(268, 155, 210, 55);

  noFill();

  stroke(lineColor);
  strokeWeight(3);

  rect(1.5, 1.5, 597, 397);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}