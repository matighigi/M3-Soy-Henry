const fs = require('fs')
const request = require('request')


const echo = (args, print) => {
    print(args.join(' '))
}

// const pwd = (args, print) => {
//     print(__dirname)   ////muestra la ruta completa
// }

const pwd = (args, print) => {
    print(__dirname.split('\\').at(-1)) //at (-1) toma el ultimo elemento del array
    //print(process.mainModule.path)
}

const date = (args, print) => {
    print(Date())
}

const ls = (args, print) => {
    fs.readdir('.',(err, files) => {
        if(err) throw err
        print(files.join('\n'))
    })
}

const cat = (args, print) => {
    fs.readFile(args.at(0), 'utf-8', (err, data) => {
        if (err) throw err
        print(data)
    })
}

const head = (args, print) => {
    fs.readFile(args.at(0), 'utf-8', (err, data) => {
        if (err) throw err
        print(data.split('\n').splice(0, 5).join('\n')) //agarra las 5 primeras lineas
    })
}

const tail = (args, print) => {
    fs.readFile(args.at(0), 'utf-8', (err, data) => {
        if (err) throw err
        print(data.split('\n').splice(-5).join('\n')) //agarra las 5 ultimas lineas
    })
}

const curl = (args, print) => {
    request(args[0], (err, data) => {
        if(err) throw err
        print(data.body)
    }) 
}
module.exports = {
    echo,
    pwd,
    date,
    ls,
    cat,
    head,
    tail,
    curl
}