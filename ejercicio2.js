/*
 *
 * Ejercicio 2: Dado un arreglo de personas, retorne el color de cabello de la persona de mas edad.
 *
 * Una persona es un objeto con los siguientes atributos:
 *    nombres: String
 *    apellidos: String
 *    edad: Number
 *    colorCabello: String
 *
 * Autor: Luis Fernando Jimenez Quintero 
 * Fecha: Sabado 27 de Agosto 2019
 *
 */

let colorCabello = function(personas) {

  let posicion = 0;

  for(let i = 0; i <personas.length; i++){
    if(personas[posicion].edad < personas[i].edad){
      posicion = i;
    }
  }

  return personas[posicion].colorCabello;
  //return 'rainbow';
};

// Prueba (No modificar)

const persona1 = {
  nombres: 'Kirk',
  apellidos: 'Hummer',
  edad: 27,
  colorCabello: 'Rubio'
};
const persona2 = {
  nombres: 'Homero',
  apellidos: 'Simpson',
  edad: 30,
  colorCabello: 'Cafe Oscuro'
};
const persona3 = {
  nombres: 'Eric',
  apellidos: 'Cartman',
  edad: 10,
  colorCabello: 'Cafe'
};
const persona4 = {
  nombres: 'John Wick',
  apellidos: '-',
  edad: 45,
  colorCabello: 'Azul'
};

let personas1 = [persona1];
let personas2 = [persona1, persona3];
let personas3 = [persona1, persona2, persona3];
let personas4 = [persona3, persona4];

if (colorCabello(personas1) === 'Rubio' &&
    colorCabello(personas2) === 'Rubio' &&
    colorCabello(personas3) === 'Cafe Oscuro' &&
	colorCabello(personas4) === 'Azul') {
  console.log('Ejercicio 2 paso el test!');
} else {
  console.log('Ejercicio 2 no paso el test!');
}

function ejecutar2(){
  const parrafo1 = document.getElementById('rptt1');
  const parrafo2 = document.getElementById('rptt2');
  const parrafo3 = document.getElementById('rptt3');
  const parrafo4 = document.getElementById('rptt4');

  parrafo1.innerHTML = colorCabello(personas1);
  parrafo2.innerHTML = colorCabello(personas2);
  parrafo3.innerHTML = colorCabello(personas3);
  parrafo4.innerHTML = colorCabello(personas4);
};
