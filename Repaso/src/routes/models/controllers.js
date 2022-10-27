//archivo aparte de funciones logicas

let users = [];
let post = [];

const getUsers = () => {
    return users;
}
const getusersByName = (name) => {
    const filterUsers = users.filter(user => user.name === name)

    if(filterUsers) return filterUsers
    else {
        return {error: 'No hay usuarios'}
    } 

    // filterUsers ? filterUsers : {error: 'No hay usuarios}
}

let id = 1
const postUsers = (name, lastname, mail) => {
    const newUser = {
        id: id++,
        name,
        lastname,
        mail,
        post: []
    }

    users.push(newUser)
    return newUser
}

const getUsersById = (id) => {
    const userById = users.find(
        user => user.id === parseInt(id)
    )

    if(userById) return userById
    else return {error: 'ID invalido'}

    // userById ? userById : {error: 'ID invalido'}
}

const updateUser = (id, name, lastname, mail) => {
    const user = users.find(user => user.id === parseInt(id))

    if(!user) return {error: 'Usuario no encontrado'}
    else {
        user.name = name
        user.lastname = lastname
        user.mail = mail

        return user
    }
}

const deleteUser = (id) => {
    const user = users.find(user => user.id === parseInt(id))

    if(!user) return {error: 'no existe ese Usuario'}
    else {
        users.filter (user => user.id !== parseInt(id))
        return user
    }
}

let idP = 1;
const posteoPosts = (userId, title, contents) => {
    const newPost = {
        id: idP++,
        title,
        contents,
        userId
    }

    posts.push(newPost)

    const user = users.find(
        user => user.id === userId
    )

    user.post.push(newPost.id)

    return newPost
}


module.exports = {
    getUsers,
    getusersByName,
    postUsers,
    getUsersById,
    updateUser,
    deleteUser,
    posteoPosts
}