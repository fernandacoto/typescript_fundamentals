//inline anotation
// en la función abajo le estamos diciendo q va a revibir
// un objeto con las propiedades x y y donde ambos tienen q
// ser #, SOLO funciona para casos sencillos (pocas props)
// En lugar de esto es q se usan las interfaces.
let drawPoint = (point: { x: number, y: number}) => {
    //
}

drawPoint({
    x: 1,
    y: 2
});

// Cuando utilizamos interfaces, lo anterior se traduce a:
// Nota: los nombres de las interfaces, como convención, la primera
// letra de c/palabra inicia con mayúscula

interface Point {
    x: number,
    y: number
}

let drawPointUsingInterface = (point: Point) => {
    //
}