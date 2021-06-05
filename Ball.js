class Ball {
  constructor(x,y,r) {
    var options = {
        isStatic: false,
        restituton:0.3,
        density:0.7,
        stiffness:0.004
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill(255,255,0);
    ellipse(pos.x, pos.y,55);
  }
};