var Point = /** @class */ (function () {
    function Point(x, y) {
        // ? en la definición de los parámetros del constructor
        // hacen que el parámetro sea opcional
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
