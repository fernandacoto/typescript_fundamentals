var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
        // para poder acceder los fields de la clase 
        // se debe de utilizar this.field
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //
    };
    return Point;
}());
// let point: Point; // se crea un objeto tipo point. Pero indefinido
// point.draw(); // se llama la función. (pero da error)
var pointInitialized = new Point();
pointInitialized.x = 1;
pointInitialized.y = 2;
pointInitialized.draw();
