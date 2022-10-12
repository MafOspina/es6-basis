//tipos de variables

//importar el componente
//const para funciones arreglos
/*const sumar = require('./sumar')
const estudiante = require('./estudiante')*/

const colors = require('colors')
const materias = require('./materias')

//crear una naterias y ponerla en el arreglo de materias
//push()
materias.push({
    nombre: "Java",
    instructor: "Tatiana Cabrera",
    notas: [
        3.4, 4.6, 3,3
    ],
    tipo: "Técnica"
})

//Recorrido del arreglo materias
materias.forEach((materia)=>{
    console.log(`nombre: ${materia.nombre}`.bgBlue.grey)
    console.log(`----------------------------------`)
})

//eliminar materia: splice

materias.splice(0, 1)
materias.forEach((materia)=>{
    console.log(`nombre: ${materia.nombre}`.bgGreen.grey)
    console.log(`----------------------------------`)
})

//actualizar: 1.ecnontrar el elemento a actualizar: findIndex
let indice = materias.findIndex((materia) => materia.instructor == "Luis Baquero")
console.log(indice)

materias[indice].instructor = "Fernando"
materias[indice].notas = [1.4, 2.4]

materias.forEach((materia)=>{
    console.log(`instructor: ${materia.instructor}`, `notas: ${materia.notas}`.bgBlue.grey)
    console.log(`----------------------------------`)
})

/*/map

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
const b = 20*/

//desestructurar un objeto