let students = [
    { nome: 'John', age: 20 },
    { nome: 'Jane', age: 25 },
    { nome: 'Mark', age: 22 }
    ]

let nomeAlunos = students.map((nome)=>{
    return nome.nome})
    console.log(nomeAlunos);