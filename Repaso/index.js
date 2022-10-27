const server = require("./src/app");
//requerimos el servidor creado en app.js y levanto el servidor
server.listen(3001, () => {
    console.log('Server on port 3001');
})