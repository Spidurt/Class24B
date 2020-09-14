const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var piggy,piggy2
var log,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,height,1000,20)
    box1 = new Box(600,720,50,50);
    box2 = new Box(800,720,50,50);
    piggy = new Pig(700,700);
    log = new Log(700,650,300,PI/2);
    box3 = new Box(600,630,50,50);
    box4 = new Box(800,650,50,50);
    piggy2 = new Pig(700,620);
    log2 = new Log(700,530,300,PI/2);  
    log3 = new Log(650,600,150,PI/7);
    log4 = new Log(850,600,150,-PI/7);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    piggy.display();
    log.display();
    box3.display();
    box4.display();
    piggy2.display();
    log2.display();
    log3.display();
    log4.display();
}