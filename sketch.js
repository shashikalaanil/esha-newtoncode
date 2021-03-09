
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
function preload() {

}

function setup() {
  createCanvas(1600, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Ground(400, 100, 700, 20);
  bobObject1 = new Ball(240, 350, 20);

  bobObject2 = new Ball(280, 350, 20);
  bobObject3 = new Ball(320, 350, 20);
  bobObject4 = new Ball(360, 350, 20);
  bobObject5 = new Ball(400, 350, 20);

  rope1 = new Rope(bobObject1.body, roof.body, -80, 0);

  rope2 = new Rope(bobObject2.body, roof.body, -40, 0);
  rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
  rope4 = new Rope(bobObject4.body, roof.body, 40, 0);
  rope5 = new Rope(bobObject5.body, roof.body, 80, 0);
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(150);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
   
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -100, y: -70 });


  }


}

