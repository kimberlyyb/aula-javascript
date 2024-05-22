// Utilize o método forEach para exibir o nome e a idade de cada aluno no console

let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 }, 
    { name: 'Mark', age: 22 }
    ]

students.forEach((students)=>{
        console.log(`Nomes:${students.name} \n Idades:${students.age}`);
})