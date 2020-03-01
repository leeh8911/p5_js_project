
        var gravity_acc = 1;
class Ball{
    constructor(_x, _y, _vx, _vy)
    {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.diameter = random(10, 20);
    }

    moveObject()
    {
        var damper_vy_acc = -0.01*this.vy;
        var damper_vx_acc = -0.01*this.vx;
        var ay = gravity_acc + damper_vy_acc;
        var ax = damper_vx_acc;

        this.vy = this.vy + ay;
        this.vx = this.vx + ax;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if(this.x < this.diameter || this.x > width - this.diameter)
        {
            this.vx = -this.vx;
        }

        if(this.y < this.diameter || this.y > height- this.diameter)
        {
            this.vy = -this.vy;
        }

        if(abs(this.vx) < 1)
        {
            this.vx = 0;
        }
        if(abs(this.vy) < 1)
        {
            this.vy = 0;
            gravity_acc = 0;
        }
    }

    drawObject()
    {
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}