const http = requiere('http') //requiero el modulo nativo de node para crear servidor
const moment = require('moment') //requiero el modulo de moment para manejar fechas

const server = http.createServer( // crear un servidor 
    (req,res) => res.end('server ready') //defino la callback 'para la vista del 
    
)
const PORT = 8000                   //puerto donde se va a levantar el servidor 
const callback =() => console.log('server ready on port: '+ PORT)      //callback que se levantara la app

server.listen(
    PORT,
    callback
)
