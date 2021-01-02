class Mango{
    constructor(x,y,diameter) {
        var option={
            isStatic:true
            restitution: 0.5,
            friction:1.0,
        }
        this.body = bodies.circle(x,y,diameter,option);
        this.diameter=diameter;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.diameter);
    pop()
    }
}