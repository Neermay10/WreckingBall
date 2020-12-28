class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        if(this.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(0);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
            pop();
        }
        
    }

    /*fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
        Matter.Body.setPosition(hexagon.body,{x:100,y:250});
    }*/
    
}