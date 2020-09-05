class Slingshot{
    constructor(body1,body2){
        var constraintOptions={
            stiffness:0.02,
            length:20,
            bodyA:body1,
            bodyB:body2
        }
       this.sling= Constraint.create(constraintOptions)
       World.add(world,this.sling)
       }
       display(){
           var posA=this.sling.bodyA.position
           var posB=this.sling.bodyB.position
           push()
           line(posA.x,posA.y,posB.x,posB.y)
           pop()
       }
}