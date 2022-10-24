const express = require('express')
const routersMovies = express.Router()


routersMovies.get('/', (req, res) => {
    // si es únicamente '/movies' que me devuelva todas las movies
    // si llegó algo así name=nemo me devuelve esa movie
    // const {name, mail} = req.query

    res.send('Soy la ruta GET de Movies')
})

routersMovies.get('/:id', (req, res) => {
    const { id } = req.params;

    res.send(`La información solicitada fue del id: ${id}`)
})


routersMovies.delete('/', (req, res) => {
    res.send('Buenas, soy la ruta DELETE de Movies')
})


module.exports = routersMovies;



//CLIENTE localhost:3000/movies
// RENDERIZABA UN COMPONENTE DEL CUAL QUIERO QUE ME MUESTRE LAS PELIS
// useEffect() => iba a buscar la info de las movies
// --> dispatch(action)
// action:
// return function(){
//      fetch(localhost:3001/movies)
//          .then(res => res.json()) 
// }
















