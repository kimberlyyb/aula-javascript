let peso = Number(prompt("Digite o seu peso:"))
let altura = Number(prompt("Digite sua altura:"))
function calculoImc(peso, altura){
    let imc 
    imc = peso/(altura*2)
    if(imc < 16.9){
        alert('Muito abaixo do peso');
    } else if( imc <= 18.5){
        alert('Abaixo do peso');
    } else if( imc <= 24.9){
        alert("Peso normal");
    } else if( imc<= 29.9){
        alert('Acima do peso');
    } else if( imc <= 34.9){
        alert('Obesidade grau 1');
    } else if(imc <= 40){
        alert('Obesidade grau 2');
    } else{
        alert('Obesidade grau3');
    }
    return imc
}
calculoImc(peso,altura)
