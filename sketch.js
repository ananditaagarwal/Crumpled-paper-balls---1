
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, dustbinObjImage, groundObject;
var paperObjectImage, paperObject;	
var world, engine;

function preload() {

	paperObjectImage = loadImage("paper.png");
	dustbinObjImage = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	World = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(600, 670, 10, 10);
	
	dustbinObj.addImage("dustbin", dustbinObjImage);
	paperObject.addImage("paper", paperObjectImage);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  
}

