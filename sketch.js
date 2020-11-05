
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof =Bodies.rectangle(400,400,60,10);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  roof.display();
  
 
}



