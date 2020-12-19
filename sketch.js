const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,390,800,20, option);
  World.add(world,ground);
  console.log(ground);

  var options = {
    restitution: 1
  }
  ball = Bodies.circle(400,100,40,options);
  World.add(world,ball)
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}