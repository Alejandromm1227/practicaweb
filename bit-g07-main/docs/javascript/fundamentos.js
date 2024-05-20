// Este es un comentario de JavaScript de una sola línea

/*
Este es un
comentario de JavaScript
en varia líneas o en bloque
*/

/* Métodos de interacción */
// Entrada
/* let entrada = prompt();
entrada = prompt('Instrucciones');
console.log(entrada); */
/* let entrada = confirm('Instrucciones');
console.log(entrada); */

// Salida
/* console.log("mensaje en consola")
document.write("mensaje en interfaz de usuario")
alert("mensaje en ventana emergente") */

/* VARIABLES */
// Declaración
/* var saludo1;
let saludo2;
console.log(saludo1);
console.log(saludo2); */

// Declaración e inicialización
/* saludo1 = 'hola1';
var saludo2 = 'hola2';
let saludo3 = 'hola3';
const saludo4 = 'hola4';
console.log(saludo1);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4); */

// Ámbito de las variables
/* let variableGlobal = 'soy variable global';
console.log(variableGlobal);
{
  let variableLocal = 'soy variable local';
  console.log(variableLocal);
} */

/* let cambiaValor = 1;
const noCambiaValor = 2;
cambiaValor = '1';
noCambiaValor = 2;
console.log(cambiaValor);
console.log(noCambiaValor); */

/* Modo estricto */
'use strict';
/* saludo = 'hola';
console.log(saludo); */

/* Tipos de dato primitivos */
// string
/*
let miVariable = '';
miVariable = 'a';
miVariable = 'abc';
miVariable = "este es un texto de 'ejemplo 1'";
miVariable = 'este es un texto de "ejemplo 2"';
miVariable = `este es un 'texto' de "ejemplo" 3`;
*/

// number
/*
let miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;
miVariable = NaN;
console.log(miVariable);
console.log(typeof miVariable);
*/
// boolean
/*
let miVariable = true;
miVariable = false;
*/
// undefined
/*
let miVariableSinAsignacion;
console.log(miVariableSinAsignacion);
*/
// null
/*
let miVariable = null;
console.log(miVariable);
*/

/* Operador typeof */
/*
let entradaUsuario = '123';
console.log(entradaUsuario);
console.log(typeof entradaUsuario);
entradaUsuario = 123;
console.log(entradaUsuario);
console.log(typeof entradaUsuario);
*/

/* const miString = 'hola';
console.log(miString);
console.log(miString[0]);
console.log(miString[1]);
console.log(miString[2]);
console.log(miString[3]); */

/* Conversión de tipos */
/* let numero1 = '1';
let numero2 = '2';
let numero3 = '3';
let resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3;
resultado = numero1 + numero2 + numero3;
console.log(resultado); */

/* let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
let resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);
numeroDecimal1 = parseFloat(numeroDecimal1);
numeroDecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado); */

/* let telefono = 555;
let codigoPais = 57;
console.log(telefono);
console.log(typeof telefono);
console.log(codigoPais);
console.log(typeof codigoPais);
telefono = String(telefono);
console.log(telefono);
console.log(typeof telefono);
codigoPais = codigoPais.toString();
console.log(codigoPais);
console.log(typeof codigoPais);
console.log('Número completo:', codigoPais + telefono); */

/* Expresiones booleanas */
// Truthy o verdaderos
/* console.log(true);
console.log(1);
console.log(-1);
console.log('a');
console.log('abc'); */

// Falsy o falsos
/* console.log(false);
console.log(0);
console.log('');
console.log(undefined);
console.log(null); */

/* Control de flujo */
// Condicionales
/* if (true) {
  console.log('se cumple la condición 1');
} */

/* if (false) {
  console.log('se cumple la condición 2');
} else {
  console.log('no se cumple la condición 2');
} */

/* if (false) {
  console.log('se cumple la condición 3 a');
} else if (true) {
  console.log('se cumple la condición 3 b');
} else {
  console.log('no se cumple la condición 3');
} */

/* if (false) {
  console.log('se cumple la condición 4');
}
if (true) {
  console.log('se cumple la condición 5');
} */

/* const perfil = 'profesor';
switch (perfil) {
  case 'estudiante':
    console.log('eres un estudiante');
    break;
  case 'profesor':
    console.log('eres un profesor');
    break;
  default:
    console.log('perfil no permitido');
    break;
} */

// Operador ternario
/* const saludo = 'hola';
saludo === 'quiubo' ? console.log('SI dijo hola') : console.log('NO dijo hola'); */

// Ciclos
// contador, centinela

/* for (let i = 0; i < 3; i++) {
  console.log('FOR ejecutando contenido del bloque');
} */

/* let i = 0;
while (i < 3) {
  console.log('WHILE ejecutando contenido del bloque');
  i++;
} */

/* let centinela = true;
while (centinela === true) {
  console.log('WHILE ejecutando contenido del bloque');
  centinela = false;
} */

/* let centinela = false;
while (centinela === true) {
  console.log('WHILE ejecutando contenido del bloque');
} */

/* do {
  console.log('DO WHILE ejecutando contenido del bloque');
} while (centinela === true); */

/* const nombres = ["john", "jane", "pepita"]
for(let nombre of nombres){
  console.log(nombre);
} */

/* const credenciales = {
  nombre: "Pepita",
  email: "pepita@bit.com",
  contrasena: "123"
}
for(let llave in credenciales){
  console.log(credenciales[llave]);
} */

/* const miMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let fila = 0; fila < miMatriz.length; fila++) {
  const f = miMatriz[fila];
  console.log("fila: ", f);
  for(let columna = 0; columna < f.length; columna++){
    const c = f[columna];
    console.log("columna: ", c);
  }
} */

/* Operadores */
// Concatenación
//console.log('Pepita' + ' ' + 'Pérez');
// Aritméticos
/* console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); */
// Precedencia de operadores - PEMDAS
/* const operacion = 12 / 3 + 2 * 3 - 1;
console.log(operacion); */

/* miVariable = 3;
console.log(miVariable); */
// Incremento
/* miVariable++;
console.log(miVariable); */
// Decremento
/* miVariable--;
console.log(miVariable); */

// Asignación =
/* let numero1 = 8;
let numero2 = 4;
let resultado = numero1 + numero2;
resultado += 3;
resultado -= 5;
resultado *= 2;
resultado /= 2;
resultado %= 3;
resultado **= 2;
console.log(resultado); */

// Comparación
/* console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == '8');
console.log(8 === '8');
console.log('8' === '8');
console.log('pepita' == 'Pepita');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4);
console.log(8 >= 8); */

// Lógicos
/* console.log(true && true && true);
console.log(true && false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true || false);
console.log(false || false);
console.log(!true);
console.log(!false); */

/* Tipos de dato no primitivos */
// Arreglos
/* const miArreglo = ['pepita', 'mafe', 'jhon'];
console.log(miArreglo);
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
miArreglo[0] = 'deisy';
console.log(miArreglo); */
/* const miArreglo = [];
console.log(miArreglo instanceof Array); */
/* const miArreglo = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
console.log(miArreglo);
console.log(miArreglo.length); */

// Objetos
/* const objeto = {
  llave: 'valor',
  propiedad: 'valor de la propiedad',
  metodo: () => {
    console.log('hola, soy un método');
  },
};
console.log(objeto);
console.log(objeto['propiedad']);
console.log(objeto.propiedad);
console.log(objeto.metodo()); */
/* const estudiante = {
  id: '0x00',
  nombre: 'Pepita',
  apellido: 'Pérez',
  saludar: function () {
    alert('Hola, soy ' + this.nombre + ' ' + this.apellido);
  },
};
console.log(estudiante);
console.log(estudiante['apellido']);
console.log(estudiante.nombre);
console.log(estudiante.saludar()); */

// this
//console.log(this);

// FUNCIONES
/* function funcionRegular() {
  console.log('Hola, soy una función regular');
}
funcionRegular();

const funcionExpresada = function () {
  console.log('Hola, soy una función expresada');
};
funcionExpresada();

const funcionFlecha = () => {
  console.log('Hola, foy una función flecha');
};
funcionFlecha();

// Hoisting
funcionRegular();
function funcionRegular() {
  console.log('Hola, soy una función regular');
}

const funcionFlecha = () => {
  console.log('Hola, soy una función expresada');
};
funcionFlecha();

(function () {
  console.log('Hola soy una IIFE o Inmediately Invoked Function Expressions');
})();

(() => {
  console.log('Hola soy una IIFE o Inmediately Invoked Function Expressions');
})(); */

/* function miFuncion(a) {
  console.log('el valor de "a" es: ' + a);
}
miFuncion('A'); */

/* function miFuncion() {
  console.log('Hola desde mi función');
}
const retornado = miFuncion();
console.log(retornado); */

/* function miFuncion() {
  return 'Hola desde mi función';
}
const retornado = miFuncion();
console.log(retornado); */

/* function miFuncion(x = 'X') {
  console.log('El valor de "x" es: ' + x);
}
miFuncion();
miFuncion(100); */

// Argumentos Rest
/* function miFuncion(...entrada) {
  console.log("entrada: ", entrada);
}
miFuncion();
miFuncion(1);
miFuncion(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

// Promesa
/* function miPromesa() {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      resolver({
        nombre: 'Pepita',
        apellido: 'Pérez',
      });
      rechazar({
        codigo: 0,
        mensaje: 'falló',
      });
    }, 0);
  });
} */

// Asincronía
/* const resultado = miPromesa();
console.log(resultado);
resultado
  .then((datos) => {
    console.log('datos:', datos);
  })
  .then(() => {
    console.log('otra cosa');
  })
  .catch((error) => {
    console.log('error: ', error);
  }); */

/* async function funcionAsincrona() {
  try {
    console.log('intentaré hacer todo lo del bloque');
    const resultado = await miPromesa();
    console.log('resultado: ', resultado);
    console.log('lo logré');
  } catch (error) {
    console.log('ocurrió un error');
    console.log('error: ', error);
  } finally {
    console.log('siempre se ejecutará');
  }
}
funcionAsincrona(); */

// Síncrono
/* function funcionSincrona() {
  console.log('Hola, Soy una función síncrona');
  console.log('uno');
  console.log('dos');
  console.log('Adiós, Soy una función síncrona');
}
funcionSincrona(); */

// Propiedades y Métodos integrados
// RegExp (Expresiones Regulares)
/* const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log('prueba@gmail.com');
console.log(expresionRegular.test('prueba@gmail.com'));
console.log(expresionRegular.test('prueba.test@gmail.com'));
console.log(expresionRegular.test('prueba@gmail.com.co'));
console.log(expresionRegular.test('pru eba@gmail.com'));
console.log(expresionRegular.test('pru@eba@gmail.com'));
console.log(expresionRegular.test('prueba@gm ail.com'));
console.log(expresionRegular.test('prueba@@gmail.com'));
console.log(expresionRegular.test('prueba@gm@ail.com'));
console.log(expresionRegular.test('prueba@gmail.co m'));
console.log(expresionRegular.test('prueba@gmail.co@m')); */

// String
/*
console.log('javascript');
console.log('javascript'.at(0));
console.log('javascript'.at(-1));
console.log('javascript'.charAt(0));
console.log('javascript'.charCodeAt(0));
console.log('html'.concat(' ', 'css', ' ', 'javascript'));
console.log('javascript'.endsWith('T'));
console.log(String.fromCharCode(64));
console.log('javascript'.includes('x'));
console.log('javascript'.indexOf('script'));
console.log('javascript'.localeCompare('javascript'));
console.log('javascript'.localeCompare('typescript'));
console.log('javascript'.match('javascript'));
console.log('javascript'.match('typescript'));
console.log('javascript'.match('script'));
console.log('javascript'.repeat(3));
console.log('javascript'.replace('java', 'type'));
console.log('javascript'.search('script'));
console.log('javascript'.slice(4));
console.log('javascript'.split(''));
console.log('javascript typescript'.split(' '));
console.log('javascript'.startsWith('J'));
console.log('javascript'.substring(4));
console.log('javascript'.toUpperCase());
console.log('JAVASCRIPT'.toLowerCase());
console.log('   javascript   '.trim());
console.log('   javascript   '.trimStart());
console.log('   javascript   '.trimEnd());
console.log('javascript'.valueOf());
const myString = new String('hola');
console.log(myString);
console.log(myString.valueOf());
*/

// Number
/*
console.log(123);
console.log(1.5);
console.log(8 - 4);
console.log(2.5e3);
console.log(0xa);
console.log(0o12);
console.log(0b1010);
console.log(new Number(10));
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.isFinite(10));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(Number.isSafeInteger(10));
console.log(isNaN(10));
console.log(isNaN("hola"));
miVariable = 1234;
console.log(miVariable.toExponential());
console.log(miVariable.toExponential(1));
console.log(miVariable.toExponential(20));
miVariable = 10.7896546
console.log(miVariable.toFixed());
console.log(miVariable.toFixed(2));
console.log(miVariable.toString());
console.log(parseInt(miVariable));
miVariable = 1234;
console.log(parseFloat(miVariable));
miVariable = 999999999999999;
miVariable = 1.99999999999999;
miVariable = 0.2 + 0.1
miVariable = (0.2 * 10 + 0.1 * 10) / 10
console.log(miVariable);
*/

// Boolean
/*
console.log(true);
console.log(false);
console.log(8 > 4);
console.log(8 < 4);
miVariable = true;
miVariable = false;
miVariable = new Boolean(true)
miVariable = Boolean.prototype.name = true;
console.log(miVariable);
console.log(miVariable.toString());
console.log(miVariable.valueOf());
*/

// Array
/*
let miArreglo = new Array();
miArreglo = new Array("a", "b", "c");
miArreglo = [];
miArreglo = ["a", "b", "c"];
miArreglo = ["a", 1, true, [], {}, null];
console.log(miArreglo);
console.log(miArreglo.length);
*/
let resultado = null;
const miString = "hola";
const mujeres = ["jane", "pepita", "anne", "emma" ]
const hombres = ["john", "fulanito", "juan", "javier"];
const edades = [1, 21, 25, 18, 32, 17, 5, 40, 2, 10];
const mayoresDeEdad = [21, 18, 32, 45]
const miArreglo = [1, 2, 3];
const miMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
console.log(mujeres.at(1));
console.log(mujeres.concat(hombres));
mujeres.copyWithin(2, 0)
resultado = mujeres.entries();
console.log(resultado);
for (const elemento of resultado) {
  console.log(elemento);
}
resultado = mayoresDeEdad.every(esMayorDeEdad)
mujeres.fill("Elizabeth")

function esMayorDeEdad(edad) {
  return edad >= 18;
}
resultado = edades.filter((edad)=> edad >= 18);
resultado = edades.find((edad)=> edad >= 18);
resultado = edades.findIndex((edad)=> edad >= 18);
resultado = edades.findLast((edad)=> edad >= 18);
resultado = edades.findLastIndex((edad)=> edad >= 18);
resultado = miMatriz.flat();
resultado = numeros.flatMap((numero)=> numero * 2);
numeros.forEach((numero)=>{
  let n = numero += "---";
  console.log(n);

});
resultado = Array.from("AEIUO")
resultado = hombres.includes("Juan")
resultado = hombres.indexOf("juan");
resultado = Array.isArray(miString);
resultado = Array.isArray(miArreglo);
resultado = hombres.join();
resultado = hombres.join(" ");
resultado = hombres.join(" y ");
resultado = hombres.keys();
*/

// JSON
/*
let miStringJson = `
{
  "name": "pepita",
  "email": "pepita@bit.institute",
  "password": "abc123"
}
`;
console.log(miStringJson);
console.log(typeof miStringJson);
console.log(miStringJson.name);
// Deserialize o deserealizar
const miObjetoJs = JSON.parse(miStringJson)
console.log(miObjetoJs);
console.log(miObjetoJs.name);
// Serialize o serializar
miStringJson = JSON.stringify(miObjetoJs)
console.log(miStringJson);
console.log(typeof miStringJson);
console.log(miStringJson.name);
*/