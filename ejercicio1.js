/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor: Luis Fernando Jimenez Quintero
 * Fecha: Sabado 27 de Agosto 2019
 *
 */
 
let arraySum = function(array) {
  let suma = 0;
  for (let i=0; i < array.length; i++){
    suma = suma + array[i];
  }

  return suma;
};

// Prueba (No modificar)

const a = [7, 6, 5, 4, 3];
const b = [-3, -4, -5, -6, -7];
const c = [33];


if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba!');
}

function ejecutar(){
  const parrafo1 = document.getElementById('rpt1');
  const parrafo2 = document.getElementById('rpt2');
  const parrafo3 = document.getElementById('rpt3');
  parrafo1.innerHTML = arraySum(a);
  parrafo2.innerHTML = arraySum(b);
  parrafo3.innerHTML = arraySum(c);
};
