fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data => {
    let resultados = document.getElementById('resultados');
    data.results.forEach(usuario => {
        resultados.innerHTML += `<p>Nombre: ${usuario.name.first} ${usuario.name.last}, Email:${usuario.email}</p>`;
    });
})
    .catch(error => console.error('Error al cargar los datos de la API: ', error));