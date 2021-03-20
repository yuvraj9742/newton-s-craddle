class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=this.offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{X:this.offsetX,Y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        Wolrd.add(world,this.rope)

        
    }
    display(){
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;
        strokeWight(2);

        var Anchor1X=point1.x;
        var Anchor1Y=point1.y;
        var Anchor2X=point2.x+this.offsetX;
        var Anchor2X=point2.y+this.offsetY;
        linew(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}