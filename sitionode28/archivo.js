const fs = require('fs');
// funcion para leer el archivo
function readFile(filePath){
    fs.readFile(filePath, 'utf-8', (err,data) =>  {
        if(err){
            console.err('Error al leer el archivo', err);
            return;
        }
        console.log('Contenido de archivo', data);
    });
}
// Llamar a la función con la ruta del archivo
readFile('prueba.xlsx');
readFile('example.txt');
readFile('trabajo.docx');
// se puede con archivos de excel, word