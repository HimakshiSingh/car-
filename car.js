
class Car{
    constructor(weight,speed) {
      
      this.body = Bodies.rectangle(x, y,50,50);
      this.speed = speed;
      this.weight = weight
      this.velocityX = this.speed
      this.shapeColor = color(225)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle  = this.body.angle;
      
      rect(pos.x,pos.y, this.speed, this.weight);
      
    }
  }
  




