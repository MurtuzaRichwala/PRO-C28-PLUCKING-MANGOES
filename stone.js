class Mango{
    constructor(x,y,diameter) {
        var option={
            isStatic:true
            density:1.2
            restitution: 0,
            friction:1.2,
        }
        this.body = bodies.circle(x,y,diameter,option);
        this.diameter=diameter;
        this.image = loadImage("stone.png");
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