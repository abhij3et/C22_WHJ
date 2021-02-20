const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var object_options =
    {
        isStatic: false,
        restitution:1
    }
    var ground_op=
    { 
        isStatic:true
    }

   object= Bodies.rectangle(400,200,100,100,object_options);
    World.add(world,object);

    ground=Bodies.rectangle(400,390,800,20,ground_op);
    World.add(world,ground);

   


    console.log(object);
}

function draw(){
    background("cyan");
    Engine.update(engine);
    rectMode(CENTER);
    fill("green")
    rect(object.position.x,object.position.y,100,100);
    fill("orange")
    rect(ground.position.x,ground.position.y,800,20)
}
