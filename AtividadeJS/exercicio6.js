let nomeCliente = [prompt("Insira o nome do cliente:")]

let cliente = prompt("Quer informar outro cliente?(Sim/Não)")

if (cliente == "sim") {
    while (cliente == "sim") {
        let nome = nomeCliente.push(prompt("Insira o nome do cliente:"))
        cliente = prompt("Quer informar outro cliente?(sim/não")
    }
}
alert(`Clientes informados: ${nomeCliente}`)