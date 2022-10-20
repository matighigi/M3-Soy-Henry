// const promise1 = new Promise((resolve, reject) => {
//     resolve('Me resolví')
// })

// const promiseReject = new Promise((resolve, reject) => {
//     reject('Salió todo mal')
// })

// case 1
// promise1
//     .then(value => console.log(value))

//case 2
// promiseReject
//     .then(
//         null, // successHandler
//         reason => console.log('reason: ', reason) // errorHandler
//     )

//case 3
// promise1
//     .then(value => {return console.log(value)}) // successHandler
//     .then(value => console.log(value)) // 

//case 4
// promiseReject // promesa que se rechaza
//     .then(value => value) // promesa
//     .then(value => value) // promesa
//     .then(value => value, reason => console.log('reason: ', reason)) 
//     .then(value => value)
//     .catch(err => console.log(err))

//case 5
// promiseReject
//     .then(
//         value => {return 'value: ', value},
//         err => {throwerr}
//     )
//     .then(
//         value => console.log(value),
//         err => console.log('2do handler: ', err)
//     )

//case 6
// promiseReject
//     .then(
//         value => {return value},
//         err => console.log('se rechazó aquí: ' + err)
//     )

// case 7
// promise1
//     .then(
//         value => {return promiseReject},
        // err => {throw err}
    // )
    //acá... se trabaja la promesa rechazada
    // .then(
    //     value => console.log('successHandler: ', value),
    //     err => {throw err}
    // )
    // .catch(err => console.log('catch: ', err))