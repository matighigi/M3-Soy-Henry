// const http = require('http')

// http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.end('Holis, me crearon con http')
//     }
// }).listen(3001, 'localhost')


const express = require('express');
const server = express();
const morgan = require('morgan');
const routerUsers = require('./routersUsers')
const routersMovies = require('./routersMovies')

server.use('/', (req, res, next) => {
    console.log('Soy el middleware =)');
    next()
})

server.use(morgan('dev'))
server.use(express.json())

// server.get('/', (req, res) => {
//     res.send('Holis soy la ruta general')
// })

server.use('/users', routerUsers)
server.use('/movies', routersMovies)


server.listen(3001, () => {
    console.log('Server listen on port 3001');
})