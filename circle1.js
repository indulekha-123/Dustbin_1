class Circle {
    constructor(x,y,radius) {
        var options={
            isStatic:false,
           restitution:0.2,
             friction:0.5,     
             density:1.2  
                 
          
        }
        this.body = Bodies.circle(x,y,70,options);
        this.radius = 70;
       this.circle1 = loadImage("paper.png");
       
        World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
         imageMode(CENTER);
        image(this.circle1,pos.x,pos.y,this.radius);
   
    }
}
    
  