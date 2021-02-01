let ellipseX = 0;
let ellipseY = 0;

let pointX =100;
let pointY =200;

let tu;
let maoGIF;

function preload(){
  tu = loadImage("image/tu.JPG");
  maoGIF = createImg("image/mao.GIF");

}

function setup() {
  // put setup code here to run once

  //create canvas 500 by 500 px
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
    //print(windowWidth);
    ellipseX = random(ellipseX, windowWidth);
    ellipseY = random(ellipseY, windowHeight);
}

function draw() {
  background('rgba(0,255,0, 0.25)')

  maoGIF.position(400, 200);
  image(tu, windowWidth/2, windowHeight/2);
  // put drawing code here to run in a loop

  //styles for the ellipse
  stroke(40, 90, 20);
  strokeWeight(7);
  ellipse(300, 200,30,30);

  //styles for the lime
  line(10, 300, 805, 75);

  //styles for the arc
  stroke(10, 90, 20);
  strokeWeight(7);
  arc(50, 55, 50, 50, 0, HALF_PI);

  //styles for the quad
  fill(255, 204, 0);
  stroke(0, 90, 20);
  strokeWeight(7);
  quad(100, 400, 90, 200, 400, 700, 600, 70);

  //styles for the square
  fill(10, 200, 20);
  stroke('rgba(60%,90%,10%,0.1)');
  strokeWeight(7);
  square(500, 10, 60, 200, 15, 100, 500);
  //styles for the point
  fill('#fae');
  strokeWeight(100);
  point(mouseX, mouseY);

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
