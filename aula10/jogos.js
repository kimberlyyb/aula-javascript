let jogos = ['Life is strange', 'The beast inside', 'Grounded', 'Elden ring', 'Detroid']

jogos.forEach((jogos)=>{
    console.log(`Jogos Dísponiveis: ${jogos}`);
})
console.log("------ ----- ----- ");
jogos.forEach((jogos, index, Array)=>{
    console.log(`Jogos Dísponiveis: ${jogos}`);
    console.log(`O numero do jogo é: ${index}`);
    console.log(`Todos os jogos ${Array}`);
})