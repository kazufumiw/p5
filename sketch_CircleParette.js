var n = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
  colorMode(HSB, 360, windowWidth, windowHeight);
	noStroke();
}

function draw() {
  var theta = 360/n;
  var radius = Math.min(windowHeight, windowWidth)/2 - 10;
  var p = createVector(0, radius);  
  var c = Math.cos(radians(theta));
  var s = Math.sin(radians(theta));
  translate(windowWidth/2, windowHeight/2);
  background(0,0,0);
  for(i = 0; i < n; i++){
    var p2 = createVector(p.x*c - p.y*s, p.x*s + p.y*c);
    fill(360/n*i,mouseX,mouseY);
    noStroke();
    triangle(0, 0, p.x, p.y, p.x*c - p.y*s, p.x*s + p.y*c);
    p = p2;
  }
}

function keyPressed(){
  switch(key){
    case '1':
      n = 360;
      break;
    case '2':
      n = 45;
      break;
    case '3':
      n = 24;
      break;
    case '4':
      n = 12;
      break;
    case '5':
      n = 6;
      break;
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //background(0,0,0);
}

