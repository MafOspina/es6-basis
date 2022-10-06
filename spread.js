const g1 = [
    "Carlos",
    "Daniela", 
    "Ronald"
]

const g2 = [
    "Maria",
    "Daniela",
]

const g3 = [
    "carlos",
    ...g1, 
    "Esteban",
    ...g2
]


console.log(g3)