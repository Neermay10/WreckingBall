const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var ground;


function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    
    //creating ground
    ground = new Ground(width/2,height - 20,width,10);

    //creating boxes
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,180,70,70);
    box3 = new Box(900,260,70,70);
    box4 = new Box(900,340,70,70);
    box5 = new Box(900,420,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,180,70,70);
    box8 = new Box(700,260,70,70);
    box9 = new Box(700,340,70,70);
    box10 = new Box(700,420,70,70);

    //creating ball
    ball = new Ball(600,200,20);

    //creating rope
    rope = new Rope(ball.body,{x:600,y:110});
}

function draw(){
    background(180);
    Engine.update(engine);

    //ground display
    ground.display();

    //box display
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    //rope.display
    rope.display();

    //ball display
    ball.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}