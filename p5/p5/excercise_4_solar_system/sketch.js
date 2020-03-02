let balls = [];
var prevX = 0;
var prevY = 0;
var maximumMassIndex = 0;
var maximumMass = 0;

function setup() {
  // put setup code here
  createCanvas(640, 480);

  var i =0;
  while(balls.length < 1024)
  {
    balls.push(new Ball(random(0,width), random(height),random(0,1), random(0,1)));
    if(maximumMass < balls[i].mass)
    {
      maximumMassIndex = i;
      maximumMass = balls[i].mass;
    }

    i++;
  }
}


function draw() {
  // put drawing code here
  background(100,100,0);

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
  }

  // if(mouseIsPressed)
  // {
    
  // }
  // else
  // {
  //   balls[maximumMassIndex].originateThisBall(balls);
  // }

  for(let i = 0; i < balls.length; i++)
  {
    balls[i].disp();
    balls[i].actionInit();
  }

}