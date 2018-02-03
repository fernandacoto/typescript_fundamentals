//--------------------------------------//
// VAR VS LET
//--------------------------------------//
// function doSomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log('Finally: ' + i ); // aqui i ya no está definida
//   // sin embargo si se transpila, sólo se muestra el error
//   // pero aun así obtenemos un archivo válido, pues en EMSC5
//   // let no existe y se traduce a un var como la función de abajo
// }
// doSomething();
// function doSomething() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log('Finally: ' + i );
// }
// doSomething();
//--------------------------------------//
// TYPES
//--------------------------------------//
// let count = 5;
// count = 'a';
// let z; // type: any de esta forma no me va a dar problema si después
// // hago la asignación 
// z = 1;
// z = true;
// z = 'a'
// // 0 problemas
// let y: number;
// // tipos disponibles en typescript:
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[]; // || let e: number[] = [1,2,3] ARREGLOS
// let f: any[]; // arreglo de x cosas
// // otro tipo ENUM 
// // podemos evitar esto:
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;
// // al usar:
// enum Color { Red, Green, Blue };
// // automaticamente Red = 0, Green = 1 ..
// // pero tamb se le puede asignar y es un best practice
// // enum Color { Red = 0, Green = 1, Blue = 2 };
// let backgroundColor = Color.Blue 
