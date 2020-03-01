function setup() {
  // put setup code here
  createCanvas(400,200);
  background(0);
}

function draw() {
  // put drawing code here
  rectMode(CORNERS)
  fill(random(0, 255), random(0, 255), random(0, 255), 40);
  rect(random(0,width), random(0,height), random(0,width), random(0,height));
}