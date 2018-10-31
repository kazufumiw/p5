function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
	rectMode(CENTER);
	colorMode(HSB);
	noStroke();
}

function draw() {
  var p = createVector(mouseX, mouseY);
  background(0,0,0);
  
  fill(360*mouseY/windowHeight,100,100);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  
  fill(360-360*mouseY/windowHeight,100,100);
  rect(windowWidth/2, windowHeight/2, mouseX, windowHeight*mouseX/windowWidth);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background(0,0,0);
}

