var letter = "YES";  

function setup(){
  createCanvas(1000, 1000);
  background(0);
  stroke(255,0,255);
  fill(20,30,50);
  textFont("Helvetica");
  textSize(10);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(255);
  noStroke();
  fill(0);
  textSize((mouseX-width/2)*5+2);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(0);
  fill("red");
  textSize((mouseX-width/2)*5+2);
  text(letter, width/2, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
  
}