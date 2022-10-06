//tipos de variables

//importar el componente
//const para funciones arreglos
/*const sumar = require('./sumar')
const estudiante = require('./estudiante')*/

const colors = require('colors')
const materias = require('./materias')

//Recorrido del arreglo materias
materias.forEach((materia)=>{
    if(materia.instructor==='Cristian Buitrago')
    console.log(`nombre: ${materia.nombre}`.bgBlue)
})

//map

const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find
const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

console.log(PHP)

//importar como module
//import {sumar,restar} from './sumar.js'

//let
let a = 10
//const
const b = 20

//desestructurar un objeto