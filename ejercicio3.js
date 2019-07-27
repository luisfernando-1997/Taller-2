/*
 * Ejercicio 3: Duplicar el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 * Autor:Luis Fernando Jimenez Quintero 
 * Fecha: Sabado 27 de Agosto 2019
 *
 */

 let arrayDoble = function(array, callback) {
   for ( let i = 0; i < array.length; i++){
     array[i] = callback(array[i]);
   }
   //console.log(array);
   return array;

   

 };

 let array = [2, 3, 4];

 arrayDoble(array, (value) => {
   return value * 2;
 });

// Prueba (No modificar!)

if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Ejercicio 3 paso el test!');
} else {
  console.log('Ejercicio 3 no paso el test!');
}

function ejecutar3(){
  const parrafo1 = document.getElementById('olp1');
  const parrafo2 = document.getElementById('olp2');
  const parrafo3 = document.getElementById('olp3');

  parrafo1.innerHTML = array[0];
  parrafo2.innerHTML = array[1];
  parrafo3.innerHTML = array[2];
};