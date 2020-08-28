
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var busketImg,busket;
var paperImg,paper;


function preload()
{
    
	busketImg=loadImage("dustbingreen.png");


}
function setup() {
	
	createCanvas(810,700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 =new Box1(510,550,10,200);
box2 = new Box1(699,550,10,200);
box3 = new Box1(610,630,200,20);
ground=new Ground(200,690,1200,20);
circle1=new Circle(200,300, 80);
busket=createSprite(600,525,2,5);
busket.addImage
("busket",busketImg);
busket.scale=0.9;



	Engine.run(engine);
  
}


function draw() {
 
  background("purple");
 
     

box1.display();
box2.display();
box3.display();
circle1.display();
ground.display();
busket.display();




}
 
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:550,y:-550});
	}
}


