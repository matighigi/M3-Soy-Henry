// const bodyParser = require("body-parser");
const express = require("express");
// const { post } = require("../../demo-express/routersUsers");
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());
let id = 1

// TODO: your code to handle requests

server.post('/posts', (req, res)=> {
    const {author, title, contents} = req.body
    let newPost = {
        id: id++,
        author,
        title,
        contents
    }
    let rechazo = {
        error: "No se recibieron los parámetros necesarios para crear el Post"
    }

    if(author&&title&&contents){
        posts.push(newPost)
        return res.status(200).json(newPost)
    }

    else{
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }
})

server.post('/posts/author/:author', (req, res) => {
    const {title, contents} = req.body
    const {author} = req.params
    let id = 1

    let newPost = {
        id: id++,
        author,
        title,
        contents
    }
    let rechazo = {
        error: "No se recibieron los parámetros necesarios para crear el Post"
    }

    if(author&&title&&contents){
        posts.push(newPost)
        return res.status(200).json(newPost)
    }
    else{
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }
})

server.get('/posts', (req, res) => {
    const {term} = req.query
    //si tengo term => voy a buscar
    //si no tengo term => voy a mandar todo

    if(term) {
        const result = posts.filter (post => {
            return post.title.includes(term) || post.contents.includes(term)
        })
        return res.status(200).json(result)
    }
    else{
       return res.status(200).json(posts)
    }
})

server.get('/posts/:author', (req, res) => {
    const {author} = req.params
    let rechazo = {
        error: "No existe ningun post del autor indicado"
    }
    const result = posts.filter(post => {
        return post.author === author
    })

    if(result.length > 0) {
        return res.status(200).json(result)
    }
    else {
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }
})

server.get('/posts/:author/:title', (req, res) => {
    const {author, title} = req.params
    const result = posts.filter (post => {
            return post.author === author && post.title === title
    })
    let rechazo = {
        error: "No existe ningun post con dicho titulo y autor indicado"
    }

    if(result.length > 0) {
        return res.status(200).json(result)
    }
    else{
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }
})

server.put('/posts', (req, res) => {
    const {id, title, contents} = req.body
    let rechazo = {
        error: "No se recibieron los parámetros necesarios para modificar el Post"
    }
    let rechazoId = {
        error: "No existe el Post con ese ID"
    }

    if(!id || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }

    const post = posts.find((post) => post.id === parseInt(id))

    if(post) {
        // let newPost = {
        //     title: title,
        //     contents: contents
        // }
        post.title = title
        post.contents = contents
        return res.status(200).json(post)
        
    } 
    else{
        return res.status(STATUS_USER_ERROR).json(rechazoId)
    }

})


server.delete('/posts', (req, res) => {
    const {id} = req.body
    let rechazo = {
        error: "Mensaje de error"
    }
    let exito = { 
        success: true 
    }
    const post = posts.find (post => post.id === parseInt(id))

    if(!id || !post){
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }

    posts = posts.filter(post => post.id !== id)
    
    return res.status(200).json(exito)
    
})


server.delete('/author', (req, res) => {
    const {author} = req.body
    const authorPost = posts.filter(post => post.author === author)
    let rechazo = {
        error: "No existe el autor indicado"
    }
    if(!author || !authorPost.length){
        return res.status(STATUS_USER_ERROR).json(rechazo)
    }
    posts = posts.filter(post => post.author !== author)

    res.status(200).json(authorPost)
})
module.exports = { posts, server };
