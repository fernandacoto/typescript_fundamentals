// en js puro se pueden declarar funciones de la forma
let log = function(message){
    console.log(message);
}

// un fat arrow function es:
let doLog = (message) => {
    console.log(message);
}
// si el contenido de la función es sólo 1 línea como
// la anterior se puede simplificar aun más:
let doLogCompact = (message) => console.log(message);
// conocidas en c# y ruby como funciones lambda