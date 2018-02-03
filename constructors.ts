class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) { 
    // ? en la definición de los parámetros del constructor
    // hacen que el parámetro sea opcional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

   
}


let point = new Point(1, 2);
point.draw();