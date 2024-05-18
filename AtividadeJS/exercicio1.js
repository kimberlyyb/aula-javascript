//Dado um array de números, let números = [1, 2, 3, 4, 5] calcule a soma de todos os 
//elementos do array.
//Crie um loop `while` que imprima os números pares de 2 a 10

let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("A soma dos elementos do array é:", soma);

let num = 2;

while (num <= 10) {
    console.log(num);
    num += 2;
}

