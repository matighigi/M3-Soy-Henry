//requerimos el morgan
const morgan = require('morgan')
//creamos el servidor y lo exportamos a index.js para levantarlo
const express = require("express");
const server = express();

//traemos el usersRoute de routes
const usersRoute = require('./routes/usersRouter');
const postsRouter = require('./routes/postsRouter');

//creamos los middleware
server.use(express.json()) //parsea la informacion
server.use(morgan('dev'))//muestra todas las peticiones y respuestas del y hacia el servidor




server.use('/users', usersRoute)
server.use('/post', postsRouter)
//RUTAS:

//- USERS:
//- get --> ?name=dai => mostrar todos los usuarioos y si hay query buscar por nombre
//- get --> /:id => mostrar usuario con ese id especificado
//- post --> agregar nuevo usuario
//- delete --> eliminar un usuario
//- put --> actualizar/modificar datos de un usuario especifico



//- POSTS:
//- get --> mostrar todos los posts
//- get --> /:id => mostrar post con ese id especificado
//- post --> agregar nuevo post
//- delete --> eliminar un post
//- put --> actualizar/modificar datos de un post especifico




module.exports = server