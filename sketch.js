const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var car
var wall


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  car = new Car (50,200,4,0)
 
  
}







function draw() {
  background(5,5,5);  
  Engine.update(engine);
  car.display();
 

  }
  