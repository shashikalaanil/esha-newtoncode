class Rope {
    constructor(bodyA, bodyB,a,b){
        var options={
        bodyA : bodyA,
       bodyB: bodyB,
      pointB:{x:a,y:b}
 }

this.rope = Constraint.create(options);
World.add(world, this.rope);
this.a=a;
this.b=b;

}

display(){
    
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;
         
       
        line(point1.x, point1.y, point2.x+this.a, point2.y+this.b);
        var s=point1.x+" "+point1.y+" "+point1.x+","+this.a+" "+point1.y+" "+this.b;
        console.log(this.a+","+this.b)
}


}
