const express = require('express'); 
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '', //si tiene contraseña se le pone sino no, se deja vacio
    database: 'bdproyecto' //ahi va el nombre de la base de datos en este caso es bdproyecto
});

conexion.connect(err => {
    if (err){
        console.error('Error al conectar la base de datos: ', err);
        return;
    }

    console.log('Se conectó a la base de datos');
});

app.listen(3000, () => {
    console.log('Servidor escuchando el puerto 3000');
});

// crear usuarios
app.post('/usuarios', (req, res) => {
    const {nombre, apellido, email, telefono} = req.body;
    const query = 'INSERT INTO usuarios (nombre, apellido, email, telefono) VALUES (?, ?, ?, ?)'; // los signos de preguntan son porque ahi van los datos 
    //que vamos a insertar
    conexion.query(query, [nombre, apellido, email, telefono], (err, result)=> {
        if (err) return res.status(500).json(err);
        res.json({id: result.insertTq, nombre, apellido, correo, telefono, estado: 'activo'});
    })
});