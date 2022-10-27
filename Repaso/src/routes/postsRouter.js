// - POSTS
// - GET --> mostrar todos los posts
// - GET --> /:id --> mostrar un post con ese id especificado
// - POST --> agregar un nuevo post
// - DELETE --> borrar un post
// - PUT --> actualizar/modificar datos de un post específico


const express = require('express')
const postsRouter = express.Router();
const { posteoPosts } = require('./models/controllers')



postsRouter.post('/', (req, res) => {
    try {
        const { userId, title, contents } = req.body;

        if(!userId || !title || !contents) throw new Error('Falta info')
        else{
            const newPost = posteoPosts(userId, title, contents)
            return res.status(200).json(newPost)
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

postsRouter.get('/', (req, res) => {
    
})


module.exports = postsRouter;