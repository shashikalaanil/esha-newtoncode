class Ball {

    constructor(x,y,r){
  
    var options={
       
			restitution:1,
			friction:0,
			density:0.8

    }
    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    this.r = r;
    
    }

    display(){
       
        push()
       
        
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        ellipse(0,0, this.r,this.r);
        pop()
}
    
}