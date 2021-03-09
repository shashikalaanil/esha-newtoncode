class Ground {

    constructor (x,y,width,height){
        
        //creating physics body
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        World.add(world, this.body);
        this.w=width;
        this.h=height;
    }
    
    //function to create canvas rect
    
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.x,this.body.position.y, this.w, this.h);
        
    }
    }