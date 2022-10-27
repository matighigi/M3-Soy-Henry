//RUTAS:
//- USERS:
//- get --> ?name=dai => mostrar todos los usuarioos y si hay query buscar por nombre
//- get --> /:id => mostrar usuario con ese id especificado
//- post --> agregar nuevo usuario
//- delete --> eliminar un usuario
//- put --> actualizar/modificar datos de un usuario especifico

const express = require ('express')
//importamos funciones de logica realizadas aparte
const {
    getUsers,
    getusersByName,
    postUsers,
    getUsersById,
    updateUser,
    deleteUser
} = require('./models/controllers')

const usersRoute = express.Router()

//se pone '/' solo por que ya esta definida la ruta '/users' en app.js 
    //devuelve todos los usuarios si no hay query
    //si hay query, mostrar el especificado
usersRoute.get('/', (req, res) => {
    const {name} = req.query

    if(name) {
        const userByName = getusersByName(name)
        if(users['error']) return res.status(400).send(userByName)

        else {
            return res.status(200).send(userByName)
        }
    }

    else{
        const users = getUsers();
        return res.status(200).send(users)
    }

})

usersRoute.post('/', (req, res) => {
    const {name, lastname, mail} = req.body

    if(!name || !lastname || !mail) return res.status(400).send({error: 'Falta info'})

    else{
        const newUser = postUsers(name, lastname, mail)

        return res.status(200).send(newUser)
    }
})

usersRoute.get('/:id', (req, res) => {
    const {id} = req.params
    const user = getUsersById(id)

    if(user['error']) return res.status(400).send(user)
    else {
        return res.status(200).send(user)
    }
})

usersRoute.put('/', (req, res) => {
    const {id, name, lastname, mail} = req.body
    const upUser = updateUser(id, name, lastname, mail)

    if(!id || !name || !lastname|| !mail) return res.status(400).send({error: 'falta info'})
    else {
        if(upUser['error']) return res.status(400).send(upUser)
        else {
            return res.status(200).send(upUser)
        }
    }
})

usersRoute.delete('/:id', (req, res) => {
    const {id} = req.params
    const delUser = deleteUser(id)

    if(delUser['error']) return res.status(400).send(delUser)
    else {
        return res.status(200).send(delUser)
    }
    
})







module.exports = usersRoute