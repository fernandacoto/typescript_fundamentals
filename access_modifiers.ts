// class Point {
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }

   
// }


// let point = new Point(1,2);
// point.draw();

//Para evitar la redundancia en las líneas 2 a 5 se puede hacer:

class Point {

    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}


let point = new Point(1,2);
point.draw();