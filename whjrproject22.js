var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundimage,helicopterIMG2
var nextarrow,army,armyimage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gamestate="serve"
var package1,ground3

function preload()
{
	helicopterIMG=loadAnimation("helicopter3.png")
	helicopterIMG2=loadAnimation("helicopter.png")
	packageIMG=loadImage("package.png")
	groundimage=loadImage("battlefield2.jpg")
	armyimage=loadImage("armyman.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background("skin")
	rectMode(CENTER);
	

	

	

	groundSprite=createSprite(width/2, height/2, width,height);
	groundSprite.addImage(groundimage)
	groundSprite.scale=2
	groundSprite.visible=false;
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3
	packageSprite.visible=false

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addAnimation("helicopter",helicopterIMG)
	helicopterSprite.addAnimation("helicopter2",helicopterIMG2)
	helicopterSprite.scale=2

	


	nextarrow=createSprite(width/2.1,height/1.2,70,70)
	nextarrow.shapeColor=("red")


	army=createSprite()
army.x=Math.round(random(width/1,width/11))
army.y=height/1.3
army.addImage(armyimage)
army.visible=false;

ground3=createSprite(width/2,height/1.1,width,10)
ground3.visible=false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#d69150");
 
  packageSprite.x= helicopterSprite.x 

 

  if(packageSprite.isTouching(ground3)){
	packageSprite.x=helicopterSprite.x
	packageSprite.y=200
	packageSprite.velocityY=0
	
} 
  drawSprites();
 
  if(gamestate==="serve"){
	helicopterSprite.visible=false;
	groundSprite.visible=false;
	packageSprite.visible=false
	
	
	fill("brown")
	textFont("Algerian")
	textSize(50)
	text("story",width/2.5,height/10)
	text("you are a millitary pilot and you are on a mission ",width/10,height/6)
	text("of supplying goods to the army in their base  ",width/10,height/4)
	text("without any noise............",width/10,height/3)

	fill("blue")
	textFont("Algerian")
	textSize(50)
	text(" USE ARROW KEYS TO MOVE ",width/3,height/2)
	text("PRESS SPACE TO DROP THE PACKAGE ",width/5,height/1.7)

	fill("green")
	textFont("Algerian")
	textSize(50)
	text(" press this button to play ",width/3.3,height/1)
	

  }

  if(mousePressedOver(nextarrow)){
gamestate="start"

  }

  if(gamestate==="start"){
	helicopterSprite.visible=true;
	groundSprite.visible=true;
	packageSprite.visible=true
	nextarrow.visible=false;
	army.visible=true 
  }

  if(keyDown("right")){
helicopterSprite.x=helicopterSprite.x+5
helicopterSprite.changeAnimation("helicopter",helicopterIMG)
  }

  if(keyDown("left")){
	helicopterSprite.x=helicopterSprite.x-5
	helicopterSprite.changeAnimation("helicopter2",helicopterIMG2)

	  }

	  if(keyDown("space")){
		
		packageSprite.velocityY=5
		  }

if(packageSprite.isTouching(army)){
	army.x=Math.round(random(width/1,width/11))
	packageSprite.x=helicopterSprite.x
	packageSprite.y=200
	packageSprite.velocityY=0
}

	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



