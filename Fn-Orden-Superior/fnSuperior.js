/*---------------------Ejercicio 1------------------------*/
let imprimirMensaje = mensaje => console.log(mensaje);
// imprimirMensaje("Israel");

/*---------------------Ejercicio 2------------------------*/
let crearMultiplicacion = (numero1, numero2) => numero1 * numero2;
// console.log(crearMultiplicacion(2, 4));

/*---------------------Ejercicio 3------------------------*/
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nuevoArray = array.map( e => crearMultiplicacion(e, 2));
//console.log(nuevoArray);

/*---------------------Ejercicio 4------------------------*/
let mayorNivel = (cervezas) => cervezas.sort((a , b) => b.abv - a.abv).slice(0, 10);
//console.log(mayorNivel(beers));

/*---------------------Ejercicio 5------------------------*/
let cervezasMenosAmargas = (cervezas) => cervezas.sort((a, b) => a.ibu - b.ibu).slice(0, 10); 
// console.log(cervezasMenosAmargas(beers));

/*---------------------Ejercicio 6------------------------*/
const cervezaYNombre = (cervezas, nombre) => cervezas.find((cerveza) => cerveza.name === nombre);
// console.log(cervezaYNombre(beers, "Buzz"));

/*---------------------Ejercicio 7------------------------*/
const cervezaYvalor = (cervezas, num) => {
    let resultado = cervezas.find((cerveza) => cerveza.ibu == num);
    if (resultado === undefined) {
        console.log(`No se encontro la cerveza ${num}`);
    } 
    return resultado;
};
//cervezaYvalor(beers, 45);

/*---------------------Ejercicio 8------------------------*/
const nombreCerveza = (nombre) => {
    let resultado = beers.findIndex((cerveza) => cerveza.name === nombre);
    if (resultadoNombre == -1) {
      console.log(`${nombre} no existe`);
    } 
    return resultado;
};
//nombreCerveza("khswbdy");

/*---------------------Ejercicio 9------------------------*/
const valorDeAlcohol = (cervezas, alcohol) =>
  cervezas
    .filter((cerveza) => cerveza.abv < alcohol)
    .map((objeto) => ({
      name: objeto.name,
      ibu: objeto.ibu,
      abv: objeto.abv,
    }));

// const resultadoObjetosNuevos = valorDeAlcohol(beers, 45);
// console.log(resultadoObjetosNuevos);

/*---------------------Ejercicio 10------------------------*/
const ordenamiento = (cervezas, propiedad, booleano) => {
  const copia = cervezas.map((cervezas) => cervezas);
  if (booleano)
    copia.sort(function compare(a, b) {
      if (a[propiedad] < b[propiedad]) {
        return -1;
      }
      if (a[propiedad] > b[propiedad]) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
};
const resultadoOrdenamiento = ordenamiento(beers, "id", true);
// console.log(resultadoOrdenamiento);


/*---------------------Ejercicio 11------------------------*/
const crearTabla = (cervezas, id) => {
  const creacionTabla = cervezas.map((cerveza) => {
    return ` 
    <tr> 
           <td>${cerveza.name}</td>
            <td>${cerveza.abv}</td>
            <td>${cerveza.ibu}</td>
    <tr>
  `;
  });
  console.log(creacionTabla);
  return (document.getElementById(id).innerHTML = creacionTabla);
};

const resultado = crearTabla(beers, "insertar-tarjeta");
