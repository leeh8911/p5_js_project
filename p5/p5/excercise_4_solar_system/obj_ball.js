
        var gravity_acc = 1;
        var density = 30;


class Ball{
    constructor(_x, _y, _vx, _vy)
    {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.ax = 0;
        this.ay = 0;
        this.mass = 0;
        while(this.mass == 0)
        {
            this.mass = random(0,1);
        }
        
    }

    actionInit()
    {
        this.ax = 0;
        this.ay = 0;
    }

    action(other)
    {
        var gravityConstant = pow(10,-6);
        var distance = sqrt(pow((this.x - other.x),2) + pow((this.y - other.y),2))/100;
        var gravityForce = (this.mass * other.mass)/pow(distance,2);


        this.ax += gravityConstant*gravityForce/this.mass * (other.x - this.x)/distance;
        this.ay += gravityConstant*gravityForce/this.mass * (other.y - this.y)/distance;
        other.ax += -gravityConstant*gravityForce/this.mass * (other.x - this.x)/distance;
        other.ay += -gravityConstant*gravityForce/this.mass * (other.y - this.y)/distance;
    }

    move()
    {

        this.vy = this.vy + this.ay;
        this.vx = this.vx + this.ax;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if(this.x < this.mass*density || this.x > width - this.mass*density )
        {
            this.vx = -this.vx;
        }
        if(this.y < this.mass*density || this.y > height - this.mass*density )
        {
            this.vy = -this.vy;
        }

    }

    disp()
    {
        fill(255);
        ellipse(this.x, this.y, this.mass*density, this.mass*density);
    }

    originateThisBall(balls)
    {
        var xOrigin = this.x - width/2;
        var yOrigin = this.y - height/2;

        for(let i = 0; i < balls.length; i++)
        {
            balls[i].x -= xOrigin;
            balls[i].y -= yOrigin;
        }
    }
}