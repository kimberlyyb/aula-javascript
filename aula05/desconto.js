let cupom =(prompt("Digite o código promocional:"))
let valorOriginal = 200;
let valorDescontado = 0;
let desconto = 0;

/* "DESC1 - 05% de desconto"
 "DESC2 - 10% de desconto"
 "DESC3 - 15% de desconto"
 "DESC4 - 20% de desconto"
 "DESC5 - 25% de desconto”*/

switch (cupom.toUpperCase()) {
    case "DESC1":
        desconto = 0.05
        valorDescontado = valorOriginal-(valorOriginal*desconto)
        alert("Cupom de 5% de desconto");
        alert(`Valor original do produto: ${valorOriginal}`)
        alert(`Valor do produto com desconto: ${valorDescontado}`)
        break;
    case "DESC2":
        desconto = 0.10
        valorDescontado = valorOriginal-(valorOriginal*desconto)
        alert("Cupom de 10% de desconto");
        alert(`Valor original do produto: ${valorOriginal}`)
        alert(`Valor do produto com desconto: ${valorDescontado}`)
        break;
    case "DESC3":
        desconto = 0.15
        valorDescontado = valorOriginal-(valorOriginal*desconto)
        alert("Cupom de 15% de desconto");
        alert(`Valor original do produto: ${valorOriginal}`)
        alert(`Valor do produto com desconto: ${valorDescontado}`)
        break;
    case "DESC4":
        desconto = 0.20
        valorDescontado = valorOriginal-(valorOriginal*desconto)
        alert("Cupom de 20% de desconto");
        alert(`Valor original do produto: ${valorOriginal}`)
        alert(`Valor do produto com desconto: ${valorDescontado}`)
        break;
    case "DESC5":
        desconto = 0.25
        valorDescontado = valorOriginal-(valorOriginal*desconto)
        alert("Cupom de 25% de desconto");
        alert(`Valor original do produto: ${valorOriginal}`)
        alert(`Valor do produto com desconto: ${valorDescontado}`)
        break;
    default:
        alert("Cupom inválido");
        break;
}