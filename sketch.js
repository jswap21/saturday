const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,50,50);   
    box2=new Box(230,50,70,140);
    ground=new Ground(600,height,1200,30);    
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}

