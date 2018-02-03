//inline anotation
// en la función abajo le estamos diciendo q va a revibir
// un objeto con las propiedades x y y donde ambos tienen q
// ser #, SOLO funciona para casos sencillos (pocas props)
// En lugar de esto es q se usan las interfaces.
var drawPoint = function (point) {
    //
};
drawPoint({
    x: 1,
    y: 2
});
var drawPointUsingInterface = function (point) {
    //
};
