class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':10.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 50, options);
      this.width = 40;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      stroke("red");
      strokeWeight(4);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };