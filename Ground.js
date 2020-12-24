class Ground {
    constructor () {
        var options = { isStatic : true }
        this.ground = Bodies.rectangle(800, 640, 1635, 20, options);
        World.add(world, this.ground);
    }

    display() {
        
        rectMode(CENTER);
        fill("orange");
        rect(this.ground.position.x, this.ground.position.y, 1635, 20);
    
    }
}