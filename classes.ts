class Point {
    x: number; // Esto se conoce como field o campo
    y: number; // Esto se conoce como field o campo

    draw() { // Esto se conoce como método
        console.log('X: ' + this.x + ', Y: ' + this.y)
        // para poder acceder los fields de la clase 
        // se debe de utilizar this.field
    }

    getDistance(anotherPoint: Point) { // Esto se conoce como método
        //
    }
}

// let point: Point; // se crea un objeto tipo point. Pero indefinido
// point.draw(); // se llama la función. (pero da error)

let pointInitialized = new Point();
pointInitialized.x = 1;
pointInitialized.y= 2;
pointInitialized.draw();