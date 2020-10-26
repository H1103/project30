const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand2,stand3, stand1, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;
var polygon1, slingShot, message1;

function setup() {
  createCanvas(windowWidth,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  stand1 = new Ground(390,height - 100,200,20);
  stand2 = new Ground(700,height - 150,200,20);
  stand3 = new Ground(1010, height - 200,200,20);
  ground1 = new Ground(400,height-30,width*2,20);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 275, 30, 40);
  box7 = new Box(390, 275, 30, 40);
  box8 = new Box(420, 275, 30, 40);

  box9 = new Box(390, 225, 30, 40);

  box10 = new Box(640, 235, 30, 40);
  box11 = new Box(670, 235, 30, 40);
  box12 = new Box(700, 235, 30, 40);
  box13 = new Box(730, 235, 30, 40);
  box14 = new Box(760, 235, 30, 40);

  box15 = new Box(670, 185, 30, 40);
  box16 = new Box(700, 185, 30, 40);
  box17 = new Box(730, 185, 30, 40);

  box18 = new Box(700, 155, 30, 40);

  box19 = new Box(950, 175, 30, 40);
  box20 = new Box(980, 175, 30, 40);
  box21 = new Box(1010, 175, 30, 40);
  box22 = new Box(1040, 175, 30, 40);
  box23 = new Box(1070, 175, 30, 40);

  box24 = new Box(980, 135, 30, 40);
  box25 = new Box(1010, 135, 30, 40);
  box26 = new Box(1040, 135, 30, 40);

  box27 = new Box(1010, 95, 30, 40);

  polygon1 = new Polygon(100, 280, 40);

  slingShot = new SlingShot(polygon1.body, {x: 150, y: 150});

  message1 = new Message1(400, 15, 580, 25);
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

  stand1.display();
  stand2.display();
  stand3.display();
  ground1.display();

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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  polygon1.display();
  slingShot.display();
  message1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(polygon1.body);
  }
}