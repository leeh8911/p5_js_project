let balls = [];
var prevX = 0;
var prevY = 0;

function setup() {
  // put setup code here
  createCanvas(1500, 800);

  while(balls.length < 5)
  {
    balls.push(new Ball(random(0,width), random(height),random(0,1), random(0,1)));
  }
}


function draw() {
  // put drawing code here
  background(100,100,0);
  // if(mouseIsPressed)
  // {
  //   var dX = mouseX - prevX;
  //   var dY = mouseY - prevY;
  //   balls.push(new Ball(mouseX, mouseY, 0, 0));
  // }
  // else
  // {

  // }

  for(let i = 0; i < balls.length-1; i++)
  {
    for(let j = i+1; j < balls.length; j++)
    {
      if(j != i)
      {
        balls[i].action(balls[j]);
      }
    }
  }

  for(let i = 0; i < balls.length; i++)
  {
    balls[i].move();
    balls[i].disp();
    balls[i].actionInit();
  }


  prevX = mouseX;
  prevY = mouseY;
}