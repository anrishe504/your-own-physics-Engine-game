const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5;
var backgroundImg;

function preload(){
  backgroundImg = loadImage('background.png');
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 250, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  rectMode(CENTER);
  box1.display("red", "white");
  box2.display("red", "white");
  box3.display("red", "white");
  box4.display("red", "white");
  box5.display("red", "white");
  box6.display("blue", "white");
  box7.display("blue", "white");
  box8.display("blue", "white");
  box9.display("blue", "white");
  box10.display("green", "white");
  box11.display("green", "white");
  box12.display("green", "white");
  box13.display("orange", "white");
  box14.display("orange", "white");
  box15.display("grey", "white");
  sling.display("blue");
  stand1.display();
  ball.display("white");
  textSize(30);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 130, 450)
  fill("black");
  textSize(15);
  text("PRESS SPACE FOR A SECOND CHANCE !!",500,500)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}