let email = [
    'email1@gmail.com',
    'email2@gmail.com',
    'email3@gmail.com',
    'email4@gmail.com'
]
// for (let cont =0; cont < email.length; cont++){
//     console.log(`Email enviado para: ${email[cont]}`);
// }

//função de retorno
email.forEach((email)=>{
    console.log(`Email enviado para: ${email}`)
})
console.log("----- ------ ------ -----");

email.forEach((email, index)=>{
    console.log(`Email enviado para: ${email}`)
    console.log(`Você é o número: ${index} da lista.`)
})

email.forEach((email, index, Array)=>{
    console.log(`Email enviado para: ${email}`)
    console.log(`Você é o número: ${index} da lista.`)
    console.log(`Elementos da array: ${Array}`)
})