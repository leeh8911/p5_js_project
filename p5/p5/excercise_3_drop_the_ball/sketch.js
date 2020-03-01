let balls = [];
var prevX = 0;
var prevY = 0;

function setup() {
  // put setup code here
  createCanvas(1500, 980);

}

function draw() {
  // put drawing code here
  background(0);
  if(mouseIsPressed)
  {
    var dX = mouseX - prevX;
    var dY = mouseY - prevY;
    balls.push(new Ball(mouseX, mouseY, dX, dY));
  }
  else
  {

  }

  for(let i = 0; i < balls.length; i++)
  {
    balls[i].moveObject();
    balls[i].drawObject();
  }


  prevX = mouseX;
  prevY = mouseY;
}