class Drop {

    constructor(x,y){
        this.d = Bodies.circle(x,y,10)
        World.add(wo, this.d)
    }

    display(){

        ellipseMode(RADIUS)
        ellipse(this.d.position.x, this.d.position.y, 10)
    }

}