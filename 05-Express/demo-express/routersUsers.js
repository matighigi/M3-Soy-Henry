const express = require('express');
const routerUsers = express.Router();


routerUsers.get('/', (req, res) => {
    res.send('Soy la ruta GET de users')
})

routerUsers.post('/', (req, res) => {
// console.log(req.body)
    const {name, mail, password} = req.body;

    if(name&&mail&&password){
        return res
                .status(200)
                .send('Me llegó todo ok')
    }
    else{
        return res
                .status(404)
                .send('Me falta info')
    }
})



module.exports = routerUsers;