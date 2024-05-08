let avaliacao = "a"

switch (avaliacao.toUpperCase()) {
    case 'A':
        console.log(`Avaliado como: ótimo.`);
        break;
    case 'B':
        console.log(`Avaliado como: Bom.`);
        break;
    case 'C':
        console.log(`Avaliado como: Regular.`);
        break;
    case 'D':
        console.log(`Avaliado como: Ruim.`);
        break;
    case 'E':
        console.log(`Avaliado como: Péssimo.`);
        break;

    default:
        console.log(`Não Avaliado.`);
        break;
}