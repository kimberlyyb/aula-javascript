//prompt recebe informação via teclado
// alert('Olá, mundo!!');

let nome = prompt('Olá, qual é o seu nome?')
alert(`Olá, ${nome} !`);

let idade = prompt('Qual a sua idade?')
alert(`Você tem ${idade} anos de idade?`)

let nota1, nota2, nota3, nota4, media, soma
//4 notas
nota1 = Number(prompt('Informe a nota 1:'))
nota2 = Number(prompt('Informe a nota 2:'))
nota3 = Number(prompt('Informe a nota 3:'))
nota4 = Number(prompt('Informe a nota 4:'))
soma = (nota1 + nota2 + nota3 +nota4)
media = soma/4
alert(`Média das notas: ${media}`)