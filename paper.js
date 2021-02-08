class Paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bodies = Bodies.circle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        pop();

    }
}