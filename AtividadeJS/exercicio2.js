// Dado um array de números, let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] crie um novo array apenas com os números pares.
// Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo
// até que o usuário insira uma idade válida (ou seja, uma idade maior do que 0).


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}

console.log("Números pares:", numerosPares);

let idade;

do {
    idade = prompt("Por favor, insira sua idade:");
    idade = parseInt(idade);
    if (isNaN(idade) || idade <= 0) {
        alert("Idade inválida. Tente novamente.");
    }
} while (isNaN(idade) || idade <= 0);

console.log("Idade válida inserida:", idade);
