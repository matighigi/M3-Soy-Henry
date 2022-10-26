// function* generatorFunction(){
//     console.log('Iniciando la generator function');
//     console.log(1, yield('sssssssssssssss'))
//     2, yield
//     return 'Generator terminada'
//     yield 'hola'
// }


// const tuki = generatorFunction(); // {}
// console.log(tuki); //{}
// console.log(tuki.next()); // 
// console.log(tuki.next('Carlos'));
// console.log(tuki.next());
// console.log(tuki.next());




// function* numbers(){
//     let num = 1;

//     while(true){
//         yield num
//         num += 1
//     }
// }

// const num2 = numbers();
// console.log(num2.next());
// console.log(num2.next());
// console.log(num2.next());
// console.log(num2.next());









// const promise = new Promise((res, rej) => {
//     res('holi')
// })


// promise
//     .then(
//         value => console.log(value),
//         reason => console.log(reason)
//     )


// async function hola(){
//     const result = await promise.then(value => console.log(value))
//     return result
// }

// console.log(hola())





// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 10000);
//     });
// }
   
// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// // }
const axios = require('axios')

const asyncCall = async() => {
    try {
        console.log('calling');
        const result = await axios('https://jsonplaceholder.typicode.com/users')
        // console.log(result.data);
        // throw new Error('Salió todo mal')
    } catch (error) {
        console.log('Catch: ', error);
    }
}

// console.log(resolveAfter2Seconds());
console.log(asyncCall());



// const alumnos = ['Ivan', 'Eze', 'Manu']


// const promises = alumnos.map(
//     alumno => new Promise(resolve => setTimeout(
//         () => resolve(alumno)
//     ), 2000)
// )

// console.log(promises);

// Promise.all(promises)
//     .then(
//         values => console.log(values)
//     )



















