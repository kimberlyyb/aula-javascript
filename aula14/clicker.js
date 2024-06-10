let contador = 0;
document.querySelector('#botaoClicar').addEventListener('click', ()=>{
    contador ++
    document.querySelector('#contador').innerText = contador;
});