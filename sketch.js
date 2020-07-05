const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  platform = new ground(800,300,300,20);
  box1=new box(675,250,50,50);
  box2=new box(730,250,50,50);
  box3=new box(785,250,50,50);
  box4=new box(835,250,50,50);
  box5=new box(893,250,50,50);
  
  box7=new box(730,190,50,50);
  box8=new box(785,190,50,50);
  box9=new box(831,190,50,50);

  box10=new box(765,130,50,50);
  box11=new box(815,130,50,50);

  box12=new box(785,70,50,50);

  player = new circle(200,250)

  sling = new slingshot(player.body,{x:200,y:245});
  
}

function draw() {
  background("red");  
Engine.update(engine);

platform.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

sling.display();

player.display();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}