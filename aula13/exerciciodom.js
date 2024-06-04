 calculoImc = () => {
    let altura = Number(document.querySelector('#altura').value)
    let peso = Number(document.querySelector('#peso').value)
    let imc = peso/(altura*altura)

    let calcularimc = document.querySelector('#resultado')
    if(imc < 16.9){
        calcularimc.innerHTML = 'Muito abaixo do peso'
    } else if( imc <= 18.5){
        calcularimc.innerHTML = 'Abaixo do peso';
    } else if( imc <= 24.9){
        calcularimc.innerHTML = "Peso normal";
    } else if( imc<= 29.9){
        calcularimc.innerHTML = 'Acima do peso';
    } else if( imc <= 34.9){
        calcularimc.innerHTML ='Obesidade grau 1';
    } else if(imc <= 40){
        calcularimc.innerHTML ='Obesidade grau 2';
    } else{
        calcularimc.innerHTML ='Obesidade grau3';
    }
    
    
    // calcularimc.innerHTML = `Seu imc é: ${imc}`
}
// let calcular = document.querySelector("#botaoCalcular")
// calcular.addEventListener('click', calculoImc)

