var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor

//npm i -g nodemon

// var fs  = require("fs")
// var http  = require("http")

// Escribí acá tu servidor

// http.createServer((req, res) => {
//     const name = req.url.slice(1)
//     const files = fs.readdirSync('./images')

//     for(let file of files) {
//         if(file.includes(name)) {
//             res.writeHead(200, {'Content-type' : 'image/jpg'})
//             const img = fs.readFileSync(`./images/${name}_doge.jpg`)
//             return res.end(img)
//         }
//     }
//     return writeHead(404).end('Not found 404')
// }).listen(3001, 'localhost')

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
