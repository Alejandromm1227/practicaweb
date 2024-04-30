'use strict';
// Hacer un programa que envíe un mensaje a la consola y a la interfaz de usuario.
/* console.log('Hola');
document.write('Hola'); */

// Hacer un programa que reciba un nombre por parte del usuario, si existe nombre saludar por nombre de otra manera saludar 'Hola'.
/* const nombreUsuario = prompt('Ingrese su nombre');
if (nombreUsuario) {
  document.write('¡Hola, ' + nombreUsuario + '!');
  console.log('Si se cumplió la condición');
} else {
  document.write('Hola');
  console.log('No se cumplió la condición');
} */

// Hacer un programa que reciba aparte nombre y apellido y muestre el nombre completo.
/* const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
console.log(nombre + ' ' + apellido);
document.write(nombre + ' ' + apellido);
// Interpolación de variables
document.write(`Su nombre completo es: ${nombre} ${apellido}`); */

// Hacer un programa que reciba 2 números del usuario y los sume.
/* const numero1 = Number(prompt('Ingrese el primer número'));
const numero2 = parseInt(prompt('Ingrese el segundo número'));
console.log(numero1 + numero2);
document.write(numero1 + numero2);
document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); */

// Hacer un programa que reciba del usuario un número y muestre si el número ingresado es cero, de otra manera que muestre si es positivo o si es negativo.
/* let numero = prompt('Ingrese un número');
if (!numero) {
  document.write('No ingresó ningún valor');
} else {
  numero = Number(numero);
  console.log(isNaN(numero));
  console.log(numero);
  if (isNaN(numero)) {
    document.write('El valor ingresado no es un número');
  } else {
    if (numero == 0) {
      document.write('El número ingresado es cero');
    } else if (numero > 0) {
      document.write('El número ingresado es positivo');
    } else {
      document.write('El número ingresado es negativo');
    }
  }
} */

// Hacer un programa que reciba del usuario dos números y muestre cual es el número mayor y cual es el número menor.
/* let numero1 = prompt('Ingrese primer número');
if (numero1 != '') {
  if (isNaN(numero1)) {
    document.write('Número 1 debe ser un valor númerico');
  } else {
    let numero2 = prompt('Ingrese segundo número');
    if (!numero2) {
      document.write('Número 2 debe ser un valor númerico.');
    } else {
      numero1 = parseInt(numero1);
      numero2 = +numero2;
      if (isNaN(numero2)) {
        document.write('Uno o más valores ingresados no es un valor númerico');
      } else {
        if (numero1 > numero2) {
          document.write(
            `El número 1 es mayor que el número 2 porque ${numero1} > ${numero2}`
          );
        } else if (numero1 < numero2) {
          document.write(
            `El número 1 es menor que el número 2 porque ${numero1} < ${numero2}`
          );
        } else {
          document.write(
            `El número 1 es igual que el número 2 porque ${numero1} = ${numero2}`
          );
        }
      }
    }
  }
} else {
  document.write('Número 1 debe ser un valor númerico.');
} */

// Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
/* const numero = parseInt(prompt('Ingrese un número entero'));
for (let i = 0; i <= numero; i++) {
  console.log('Valor en i: ', i);
  document.write(i);
} */

// Hacer un programa que pida al usuario un número entero y muestre los valores desde uno hasta el número ingresado.
/* const numero = parseInt(prompt('Ingrese un número entero'));
for (let i = 1; i <= numero; i++) {
  console.log('Valor en i: ', i);
  document.write(i);
} */

// Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.
/* let texto = prompt('Ingrese un texto');
while (texto === '') {
  texto = prompt('Ingrese un texto');
}
document.write('Ingresaste el texto: ' + texto); */

// Hacer un programa que le pregunte al usuario si desea continuar, en caso de SI repetir pregunta, en caso de NO salir.
/* let continuar = null;
do {
  continuar = confirm('¿Desea continuar?');
  if (!continuar) {
    document.write('El programa ha terminado.');
  }
} while (continuar); */

// Hacer un programa que muestre los días de la semana.
/* const miArreglo = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
for (let i = 0; i < miArreglo.length; i++) {
  document.write(miArreglo[i] + ' ');
} */

// Hacer un programa que itere sobre una cadena de texto
/* const miString = 'hola';
for (let i = 0; i < miString.length; i++) {
  document.write(miString[i]);
} */

// Hacer un programa que pida un número al usuario y muestre los números pares desde 1 hasta el número ingresado.

/* Hacer un programa que solicite al usuario un número de 0 a 6 (manejar errores) mostrar el día de la semana correspondiente según arreglo "días" */

// Hacer un programa que solicite al usuario un día de la semana y le retorne su nombre en inglés.

// Hacer una función que envíe un mensaje a la consola y a la interfaz de usuario.
/* function miFuncion() {
  console.log('Hola');
  document.write('Hola');
}
miFuncion(); */

// Hacer una función que reciba un nombre por parte del usuario, si existe nombre saludar por nombre de otra manera saludar 'Hola'.
/* function miFuncion() {
  const nombreUsuario = prompt('Ingrese su nombre');
  if (nombreUsuario) {
    console.log('if..');
    document.write('¡Hola, ' + nombreUsuario + '!');
  } else {
    console.log('else..');
    document.write('Hola');
  }
}
miFuncion(); */

/* function miFuncion(nombre) {
  if (nombre) {
    console.log('if..');
    document.write('¡Hola, ' + nombre + '!');
  } else {
    console.log('else..');
    document.write('Hola');
  }
}
miFuncion();
miFuncion('Pepita');
miFuncion('Fulanito'); */

// Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.
/* const numero1 = parseInt(prompt('Primer número'));
const numero2 = parseInt(prompt('Segundo número'));

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

const retornadoSuma = suma(numero1, numero2);
const retornadoResta = resta(numero1, numero2);

document.write(`La suma de ${numero1} + ${numero2} es: ${retornadoSuma} `);
document.write(`La resta de ${numero1} - ${numero2} es: ${retornadoResta}`); */

// Hacer una función que reciba un nombre, si existe nombre saludar por nombre de otra manera saludar 'Hola, desconocido'.
/* function miFuncion(nombre = 'desconocido') {
  console.log('Hola, ' + nombre);
}
miFuncion();
miFuncion('Pepita'); */
