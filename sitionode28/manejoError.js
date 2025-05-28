const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data)=>{
    if (err){
        console.error('Error leyendo el archivo: ', err);
        return;
    }
    console.log('Contenido del archivo', data);
});