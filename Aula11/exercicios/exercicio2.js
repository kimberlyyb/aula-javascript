// Dado o array , utilize o método filter para criar 
// um novo array contendo apenas os números pares.
let numeros = [1, 2, 3, 4, 5]

let pares= numeros.filter((numeros)=>{
    return numeros % 2 === 0
})
console.log(pares);