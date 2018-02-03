class Point {
    // si voy a agregar properties(getters y sertters) a mi clase
    // y mis fields son de una letra, para poder seguir la convención
    // camelCase en en los properties. Lo que hago es agregar _ de prefijo
    // a los fields.
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y)
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if(value < 0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }
}


let point = new Point(1,2);
let x = point.x;
point.x = 10;
point.draw();