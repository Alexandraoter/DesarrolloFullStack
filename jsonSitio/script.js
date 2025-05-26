// // var es una variable y vamos a colocar una que tenga todo lo que esta en la 
// // la variable persona va contener lo que esta contenido en el json
// var persona = {
//     "nombre":"Juan",
//     "apellido": "Pérez",
//     "edad": 30,
//     "ciudad": "Cali",
//     "gustos": ["nadar", "futbol", "ir al cine"],
//     "correo": "juan@gmail.com",
//     "Telefono": 3344665
// };

// console.log(persona.apellido);


function buscarDatos() {
    // Obtener el valor de búsqueda del formulario
    var busqueda = document.getElementById("busqueda").value.toLowerCase();

    // Hacer una solicitud para obtener el archivo JSON
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            // Filtrar los datos según la búsqueda
            // lo que vaya aqui es lo que busca por ej: se busaria por nombre de la ciudad item => item.ciudad
            // el to lowercase es para que si uno busca algun nombre en minuscula y esta guardado con mayuscula
            // esa funcion lo trae tal cual como esta guardado
            var resultados = data.filter(item => {
                var nombre =item.nombre.toLowerCase();
                var ciudad =item.ciudad.toLowerCase();
                var edad =item.edad.toString();

                return nombre.includes(busqueda) ||
                        ciudad.includes(busqueda) ||
                        edad.includes(busqueda);
            })
            // Mostrar los resultados en el HTML
            var resultadosDiv = document.getElementById("resultados");
            resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

            if (resultados.length > 0) {
                resultados.forEach(item => {
                    resultadosDiv.innerHTML += `<p>Nombre: ${item.nombre}, Edad: ${item.edad}, Ciudad: ${item.ciudad}</p>`;
                });
            } else {
                resultadosDiv.innerHTML = "<p>No se encontraron resultados.</p>";
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}
