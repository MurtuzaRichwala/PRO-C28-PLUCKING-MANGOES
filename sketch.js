
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,treeing;
var boy,boying;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload(){
	treeing=loadImage("tree.png");
	boying=loadImage("boy.png");
	mango1=loadImage("mango.png");
	}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;
	dground=new Ground();
	stone=new stone(100,460,23);
	mango1=new Mango1(600,290,34);
	mango2=new Mango2(855,325,35);
	mango3=new Mango3(670,260,35);
	mango4=new Mango4(730,200,35);
	mango5=new Mango5(710,320,36);
	mango6=new Mango6(780,250,35);
	mango7=new Mango7(825,170,33);
	mango8=new Mango8(880,260,35);

	attach=new Throw(stone.body,{x:100,y:465});
	
	tree=createSprite(775,368);
	tree.addImage(treeing);
	tree.scale=0.24;

	boy=createSprite(160,550);
	boy=addImage(boying);
	boy.scale=0.125;


	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");


  detectCollosion(stone,mango1);
  detectCollosion(stone,mango2);
  detectCollosion(stone,mango3);
  detectCollosion(stone,mango4);
  detectCollosion(stone,mango5);
  detectCollosion(stone,mango6);
  detectCollosion(stone,mango7);
  detectCollosion(stone,mango8);

  drawSprites();


mango1.display();
 mango2=display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
}

function mouseDragged(){
	Matter.Body.setposition(stone.body,{x:mouseX,y:mouseY});
}

function mouseRealeased(){
	attack.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}


