let alunos = [
    {
        Nome: 'kimberly',
        RA: 202401,
        Matriculado: true
    },
    {
        Nome: 'kauanny',
        RA: 202402,
        Matriculado: true
    },
    {
        Nome: 'mariana',
        RA: 202403,
        Matriculado: true
    },
]

let nomeAlunos = alunos.map((Nome) => {

    return Nome.Nome
})
console.log(nomeAlunos);
console.log("----- ------ ------ ------");

let raAlunos = alunos.map((ra) => {

    return ra.RA
})
console.log(raAlunos);