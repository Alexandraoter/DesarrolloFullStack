const express = require('express');
const app = express();
app.get('/',(req, res) =>{
    res.send('Bienvenido a mi API');
});
// se coloca el puerto para que escuche 
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});