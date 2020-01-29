let pointX;
let mouseDist;
let triY;

function setup() {
  createCanvas(1280, 600);
  rectMode(CENTER);
  print(pointX);
}

function draw() {

  if(keyIsPressed){
  background(117,110,141);
  } else {
  background(141,110,100);
  }

  stroke(random(255), random(255), random(255));
  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  print(mouseDist);
  smooth();
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);

  //rect n corner styles
  strokeWeight(mouseDist);
  fill(253, 154,163);
  stroke (223,120,138);
  rect(340, 180, 120, 120, 25);

  //rect styles
  strokeWeight(mouseDist);
  fill(254, 184,180);
  stroke (228,149,153);
  rect(340, 400, 120, 120);

  //ellipse styles
  strokeWeight(mouseDist);
  fill(254, 217,194);
  stroke (235,188,170);
  ellipse (640,180,120,120,300);

  //arc styles
  strokeWeight(mouseDist);
  fill(227, 240,205);
  stroke (207,217,180);
  arc(640, 400, 140, 140, 0, PI+QUARTER_PI, PIE);

  //triangle styles
  strokeWeight(mouseDist);
  fill(183,223,215);
  stroke (146,200,175);
  triangle (870,240,1000,240,935,130);

  //triangle styles
  strokeWeight(mouseDist);
  fill(199,206,233);
  stroke (169,182,206);
  triangle (870,365,1000,365,935,475);


function keyPressed (){
  if (key==="s"){
    save ("p5DemoSketch.png")
  }
}

}
