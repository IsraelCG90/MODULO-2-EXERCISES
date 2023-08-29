/*Ejercicio 1*/
function primerPrograma(x, y) {
    if (x > y){
        console.log(`${x} es mayor que ${y}`)
    } else {
        console.log(`${x} no es mayor que ${y}`)
    }
}
primerPrograma(5, 3);
primerPrograma(7, 1);

/*Ejercicio 2*/
function segundoPrograma(x, y) {
    if (x == y){
        console.log(`${x} es igual a ${y}`)
    } else {
        console.log(`${x} es diferente a ${y}`)
    }
}
segundoPrograma(5, 5);
segundoPrograma(7, 1);

/*Ejercicio 3*/
function tercerPrograma(x, y) {
    if (x > y) {
        console.log(`${x} es mayor a ${y}`);
    } else if (x < y) {
        console.log(`${y} es mayor a ${x}`)
    } else {
        console.log(`${x} son iguales ${y}`)
    }
}
tercerPrograma(10, 5);
tercerPrograma(-15, 3);
tercerPrograma(7, 7);

/*Ejercicio 4*/
function cuartoPrograma(x, y, z) {
    if (x < y && x < z){
        console.log(`${x} es el más chico`);
    } else if (y < x && y < z){
        console.log(`${y} es el más chico`);
    } else {
        console.log(`${z} es el más chico`);
    }
}
cuartoPrograma(7, 5, 8);
cuartoPrograma(3, 9, 12);
cuartoPrograma(12, 6, 1);

/*Ejercicio 5*/
var personaUno = {
    nombre: "Daniel",
    edad: 65,
    altura: 170,
};
var personaDos = {
    nombre: "Marcos",
    edad: 50,
    altura: 175,
};
function quintoPrograma(obj1, obj2){
    obj1.altura > obj2.altura ? 
    console.log(`${obj1.nombre} es más alto que ${obj2.nombre}`): 
    console.log(`${obj2.nombre} es más alto que ${obj1.nombre}`);
    obj1.edad > obj2.edad ? 
    console.log(`${obj1.nombre} es mayor que ${obj2.nombre}`): 
    console.log(`${obj2.nombre} es mayor que ${obj1.nombre}`);
}
quintoPrograma(personaUno, personaDos);

/*Ejercico 6*/


/*Ejercico 7*/
