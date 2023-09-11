/*---------------------Ejercicio 1------------------------*/
function programaUno() {
  let num = prompt("Ingresa un numero del 1 y 100");
  if (num > 0 && num <= 100) {
    for (i = num; i > 0; i--) {
      console.log(i);
    }
  } else {
    alert("El numero ingresado es incorrecto");
  }
}
//programaUno();

/*---------------------Ejercicio 2------------------------*/

function programaDos() {
  let num = prompt("Ingrese un numero del 1 al 10");
  if (num > 0 && num <= 10) {
    for (i = 1; i < 11; i++) {
      console.log(`${i} x ${num} = ${i * num}`);
    }
  } else {
    alert("El numero ingresado es incorrecto");
  }
}
//programaDos();

/*---------------------Ejercicio 3------------------------*/
function tercerPrograma() {
  let num = Number(prompt("Ingrese un numero"));
  let acumulador = num;
  while (num > 0) {
    num = Number(prompt("Ingrese un numero"));
    acumulador = acumulador + num;
  };
  console.log(acumulador);
};
/*
function tercerPrograma() {
  let acumulador = 0;
  let continuar = true;
  while(continuar){
    let numeroIngresado = Number(prompt("Ingrese un numero"));
    acumulado += numeroIngresado
    if(numeroIngresado == 0){
      continuar = false;
    };
  };
  console.log(`Despues del bucle el acumulado es ${acumulador}`);
}*/
//tercerPrograma();

/*---------------------Ejercicio 4------------------------*/
function cuartoPrograma() {
  let num = Number(prompt("Ingrese un numero"));
  let acumulador = num;
  do {
    num = Number(prompt("Ingrese un numero"));
    acumulador += num;
  } while (num != 0);
  console.log(acumulador);
}
//cuartoPrograma();

/*---------------------Ejercicio 5------------------------*/
function quintoPrograma() {
  let adivinar = 9;
  let acumulador = 0;
  let num = Number(prompt("Adivina el numero: ingresa tu opcion"));
  while (num != adivinar) {
    if (num > adivinar) {
      acumulador++;
      alert("El numero ingresado es muy grande");
      num = Number(prompt("Adivina el numero: ingresa tu opcion"));
    } else {
      acumulador++;
      alert("El numero ingresado es muy chico");
      num = Number(prompt("Adivina el numero: ingresa tu opcion"));
    }
  }
  alert(`Felicitaciones adivinaste! El numero de intentos fue: ${acumulador}`);
}
//quintoPrograma();

/*---------------------Ejercicio 6------------------------*/
function sextoPrograma() {
  let num = Number(prompt("Ingrese un numero"));
    // 50
  for (let i = num; i > 0; i--) {
              //50
              //49
              //48
              //25
    if(num % i == 0) {
      //50  50 
      //50  49     //50  48
      //50  25  
      console.log(i); //50 25 10  5  1 
    };
  }
}
//sextoPrograma();

/*---------------------Ejercicio 7------------------------*/
let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"];
function septimoPrograma() {
  for (const color of colores) {
    console.log(color);
  };
};
//septimoPrograma();

/*---------------------Ejercicio 8------------------------*/
let numeros = [5, 7, 10, 13, 17];
function octavoPrograma() {
  for (const num of numeros) {
    console.log(`El número es ${num} y su doble es ${num*2}`);
  };
};
//octavoPrograma();

/*---------------------Ejercicio 9------------------------*/
let familia = [
  {
    apellido: "Carrion",
    edad: 21,
    integrante: "Hermana",
    nombre: "Evelin"
  },
  {
    apellido: "Carrion",
    edad: 34,
    integrante: "Hermana",
    nombre: "carla"
  },
  {
    apellido: "Garcia",
    edad: 62,
    integrante: "Madre",
    nombre: "Gilda"
  },
  {
    apellido: "Carrion",
    edad: 32,
    integrante: "Hermano",
    nombre: "Israel"
  }
];
function saludo (contenedorFamilia){
  for (let familiar of contenedorFamilia)
  console.log(`Hola soy ${familiar.nombre} ${familiar.apellido} (${familiar.integrante}) y tengo ${familiar.edad}`)
}
//saludo(familia);

/*---------------------Ejercicio 10------------------------*/
let objetoEjemplo = {
  nombre: "Juan",
  apellido: "Perez",
  esColombiano: true,
  edad: 28,
  estudios:["primarios", "secundarios", "terciarios"]
}
function decimoPrograma(ejemplo) {
  for (let key in ejemplo) {
    console.log(key)
  }
}
//decimoPrograma(objetoEjemplo);

/*---------------------Ejercicio 11------------------------*/
function programaOnce (ejemplo2){
  for (let key in ejemplo2){
    console.log(ejemplo2[key]);
  };
};
//programaOnce (objetoEjemplo);

/*---------------------Ejercicio 12------------------------*/
function programaDoce(){
  let num = Number(prompt("Ingrese un numero"));
  let numPares = 0;
  let numImpares = 0;
  while(num > 0){
    if(num % 2 == 0){
      numPares += num;
      num = Number(prompt("Ingrese un numero"));
    }else{
      numImpares += num;
      num = Number(prompt("Ingrese un numero"));
    }
  }
  console.log(`Pares: ${numPares}`);
  console.log(`Impares: ${numImpares}`);
}
//programaDoce();

/*---------------------Ejercicio 13------------------------*/
let conjuntoNumeros = [32, 78, 91, 44, 86, 62, 27, 104, 12, 59];
function mayor(numeros) {
  let numMayor = 5;
  for(let aux of numeros){
    if(aux > numMayor){
      numMayor = aux;
    }
  }
  console.log(`El numero más grande es ${numMayor}`);
}
mayor(conjuntoNumeros);