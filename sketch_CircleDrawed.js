function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
}

function draw() {
  var p = createVector(mouseX, mouseY);
  background(0,0,0);
  noStroke();
  fill(100,100,100);
  if(mouseX + mouseY != 0){
  	ellipse(p.x, p.y, 40, 40);	
  }
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight);
//    background(0,0,0);
//}

