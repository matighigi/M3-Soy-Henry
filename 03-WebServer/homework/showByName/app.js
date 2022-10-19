var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
//npm init -y
//npm i nodemon

// Escribí acá tu servidor

http.createServer((req, res) => {
    const nameImage = req.url.slice(1) //asi nos corta la barrita y nos quedamos con el resto de la palabra
    const images = fs.readdirSync('./images')

    for(const image of images) {
        if(image.includes(nameImage)) {
            res.writeHead(200, {'Content-type' : 'image/jpg'})
            const img = fs.readFileSync(`./images/${nameImage}_doge.jpg`)
            return res.end(img)
        }
    }
    res.writeHead(404, {'Content-type' : 'text/plain'})
    return res.end('Not found. Request invalid.')
     
}).listen(5000, 'localhost')


//-----------------------------------------------------------------------------------
// http.createServer((req, res) => {
//     if(req.url === '/arcoiris_doge.jpg') {
//         fs.readFile(`./images/${req.url}.jpg`, (err, data) =>{
//             if(err) {
//                 res.writeHead(404, {'Content-type': 'text/plain'})
//                 res.end('Hubo un error')
//             }
//             else {
//                 res.writeHead(200, { "Content-Type": "image/jpg" })
//                 res.end(data)
//             }
//         })
//     }
// })
// .listen(3001, "127.0.0.1")


// http.createServer((req, res) => {
//     switch (req.url) {
//       case "/": {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end("<div><h1>HOME</h1></div>");
//         break;
//       }
//       default: {
//         fs.readFile(`./images${req.url}.jpg`, (err, data) => {
//           if (err) {
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("IMG not found");
//           } else {
//             res.writeHead(200, { "Content-Type": "image/jpg" });
//             res.end(data);
//           }
//         });
//       }
//     }
//   })
//   .listen(3001, "localhost");
