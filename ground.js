class Ground{
    constructor(){
        var option={
            isStatic:true,
            friction:0.4
        }
        this.body = Bodies.recangle(500,625,1200,20);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("silver");
        rect(500,625,1200,20);
    }
}