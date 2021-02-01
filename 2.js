
let ellipseX;
let ellipseY;

let fillR;
let fillG;
let fillB;

function setup(){
  createCanvas(windowWidth, windowHeight);
  fillR = random(255);
  fillG = random(255);
  fillB = random(255);
  background(180, 49, 100);
}


function draw(){
  //  if(mouseIsPressed){
  //    background(180, 49, 100);
  //  }else {
  //    background(180, 49, 100);
  // }

  if(mouseIsPressed){
      line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if(mouseX > windowWidth/2 && mouseX < windowHeight/1){
    background(255, 204, 0);
    fill(180, 0, 255);
    triangle(300, 600, 300, 200, 86, 75);
    ellipseX = 300;
    ellipseY = 200;
  } else {
    ellipseX = 900;
    ellipseY = 500;
    background(180, 0, 255);
    fill(255, 204, 0);
    triangle(300, 600, 300, 200, 500, 75);
    if(keyIsPressed == true){
      line(0, 400, 800, 600);
    }
  }
  fill(fillR, fillG, fillB);

  ellipse(ellipseX, ellipseY, 100, 100);
  textSize(20);
  if(dist(mouseX, mouseY, ellipseX, ellipseY) < 50){
    text("Got me!", 200, 300);
  }
  //print(dist(mouseX, mouseY, ellipseX, ellipseY));
}


function mouseReleased(){
    fillR = random(255);
    fillG = random(255);
    fillB = random(255);

}
function keyPressed(){
  if(key == 'g' || key == 'G'){
    fillR = random(255);
    fillG = random(255);
    fillB = random(255);
}
if(key == 'a' || key == 'A'){
  background(180, 49, 100);
}
  if(key == 's'){

  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
