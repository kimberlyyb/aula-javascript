let animal ={
    nome: "millady",
    idade: 3,
    tipo: "cachorro",
    sobre:{
        raca: "shitzu",
        vacinas: "raiva",

    },
    adocaoDisponivel: true
}
console.log(animal.tipo);
let animal2 ={
    nome: "gamora",
    idade: 2,
    tipo: "gato",
    sobre:{
        raca: "persa",
        vacinas: "Calicivirose",
    },
    adocaoDisponivel: true
}
console.log(animal2.tipo);

let animal3 ={
    nome: "querubim",
    idade: 2,
    tipo: "coelho",
    sobre:{
        raca: "hotot",
        vacinas: "mixomatose",
    },
    adocaDisponivel: true
}
console.log(animal3.tipo);
//1 obj 3 var

let {
    nome,
    tipo,
    adocaDisponivel
} = animal

console.log(tipo.toUpperCase());