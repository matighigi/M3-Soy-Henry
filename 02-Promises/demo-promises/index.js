// const tukiPromise = new Promise((resolve, reject) => {
//     if(3 < 2){
//         resolve('tukiPromise resuelta con éxito')
//     }
//     else{
//         reject('tukiPromise fallida')
//     }
// })

// console.log(tukiPromise.catch(error => console.log(error)))

// console.log(tukiPromise.then(
//     (response) => console.log(response), // successHandler
//     (error) => console.log(error) // errorHandler
// ))

// const axios = require('axios')


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

axios('https://jsonplaceholder.typicode.com/users') // -> promise
    .then(response => response.data) // -> respuesta de la promesa anterior
    .then(data => data[0].name) // -> respuesta de la promesa anterior
    .then(name => name + ' holi') // -> respuesta de la promesa anterior
    .catch(error => console.log(error)) 
    
    

