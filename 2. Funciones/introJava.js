/*Ejercicio 1*/
function saludar(nombre) {
    console.log(`Hola ${nombre}`)
};
saludar("Israel");

/*Ejercicio 2*/
function multiplicar(x, y) {
    console.log(x*y);
}
multiplicar(5, 6);

/*Ejercicio 3*/
function areaTriangulo(b, a) {
    console.log((b * a)/2);
};
function perimetroTriangulo(uno, dos, tres) {
    console.log(uno + dos + tres);
};
areaTriangulo(5, 3);
perimetroTriangulo(4, 5, 6);

/*Ejercicio 4*/
function calcularPrecio(precio, cantidad){
    let total = precio * cantidad;
    if (cantidad >= 10) {
        let descuento = total * 0.10;
        console.log(total - descuento)
    } else if (cantidad >= 20) {
        let descuento = total * 0.20;
        console.log(total - descuento);
    } else {
        console.log(cantidad*precio)
    }
};
calcularPrecio(10, 30);

/*Ejercicio 5*/
function esMayorDeEdad(edad) {
    edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
};
esMayorDeEdad(35);
esMayorDeEdad(10);

/*Ejercico 6*/
function calcularimpuesto(ingreso) {
    if (ingreso <= 10000){
        console.log(ingreso*0.10);
    } else {
        if (ingreso > 10000 && ingreso <= 20000){
            console.log(ingreso*0.15);
        } else {
            console.log(ingreso * 0.20);
        }
    };
}
calcularimpuesto(9000);
calcularimpuesto(17000);
calcularimpuesto(35000);

/*Ejercico 7*/
function verificarDia(num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Es un dia laboral");
            break;
        case 6: 
        case 7:
            console.log("Es fin de semana");
            break;
        default:
            console.log("El numero no pertenece a ningun dia de la semana")
            break;
    }
}
verificarDia(3);
verificarDia(6);
verificarDia(12);