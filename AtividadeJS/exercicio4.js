// // Crie um programa em JavaScript que calcula e exibe a sequência de Fibonacci até um
// // número de termos especificado pelo usuário. A sequência de Fibonacci começa com 0
// // e 1, e cada termo subsequente é a soma dos dois termos anteriores.


function gerarFibonacci(numTermos) {
    let sequencia = [];
    
    if (numTermos <= 0) {
        return sequencia;
    }

    sequencia.push(0); 
    if (numTermos === 1) {
        return sequencia;
    }

    sequencia.push(1); 
    for (let i = 2; i < numTermos; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
    
    return sequencia;
}


let numTermos;

do {
    numTermos = prompt("Insira o número de termos para a sequência de Fibonacci:");
    numTermos = parseInt(numTermos);
    if (isNaN(numTermos) || numTermos <= 0) {
        alert("Número de termo inválido. Tente novamente.");
    }
} while (isNaN(numTermos) || numTermos <= 0);


let sequenciaFibonacci = gerarFibonacci(numTermos);
alert(`Sequência de Fibonacci com ${numTermos} termos: ${sequenciaFibonacci.join(", ")}`);

