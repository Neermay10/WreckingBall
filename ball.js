class Ball{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            frictionAir:0.005,
            density:0.04
        }


        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("skyblue")
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}