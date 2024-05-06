let peso = prompt("Informe sua peso:")
let altura = prompt("Informe seu altura:")
let imc = peso / (altura*2)

if(imc >= 18.5 && imc <= 24.9){
    alert("Está saudável")
} else{
    alert("Não está saudável")
}