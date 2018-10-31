var fr = 60.0;
var n = 20 ;
var s = 0.25;
var vr = 0.05;
var p = new Array(10);
var p_size = new Array(10);
var p_vel = new Array(10);
var color = int(360*Math.random());

function setup() {
	createCanvas(windowWidth, windowHeight);
	clear();
  colorMode(HSB, 360, 100, 100, 255);
  frameRate(fr);
  for(var i = 0; i < n; i++){
    p_size[i] = s*Math.random()*Math.min(windowHeight, windowWidth);
    p[i] = createVector((windowWidth - p_size[i])*Math.random() + p_size[i]*0.5, (windowHeight - p_size[i])*Math.random() + p_size[i]*0.5);
    p_vel[i] = createVector(vr*windowWidth*2*(Math.random()-0.5)/fr, vr*windowHeight*2*(Math.random()-0.5)/fr);
    ellipse(p[i].x, p[i].y, p_size[i]);
    fill(0, 100, 100, 100);
  }
}

function draw() {
  clear();
  noStroke();
  for(var i = 0; i < n; i++){
    p[i].add(p_vel[i]);
    fill(70, 100, 100, 128);
    ellipse(p[i].x, p[i].y, p_size[i]);
    if(p[i].x < p_size[i]*0.5 || windowWidth - p_size[i]*0.5 < p[i].x){
      p_vel[i].x = -p_vel[i].x;
    }
    if(p[i].y < p_size[i]*0.5 || windowHeight - p_size[i]*0.5 < p[i].y){
      p_vel[i].y = -p_vel[i].y;
    }
  }
  
  stroke(60,300,100,32);
  for(var i = 0; i < n - 1; i++){
    line(p[i].x, p[i].y, p[i+1].x, p[i+1].y);
    //line(p[i].x, p[i].y, p[i+2].x, p[i+2].y);
    //line(p[i].x, p[i].y, p[i+3].x, p[i+3].y);
  }
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

