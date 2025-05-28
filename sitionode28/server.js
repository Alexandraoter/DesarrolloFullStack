const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, Mundo!\n');
});
server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

// Explicación del Código
// const http = require('http');
// Esta línea importa el módulo http de Node.js. El módulo http es fundamental para crear servidores web y manejar solicitudes (requests) y respuestas (responses) HTTP. Al usar require('http'), estamos trayendo todas las funcionalidades relacionadas con HTTP a nuestro script y las asignamos a la constante http.

// const hostname = '127.0.0.1';
// Aquí se define la dirección IP del servidor. 127.0.0.1 es una dirección IP especial conocida como "localhost". Significa que el servidor solo será accesible desde tu propia máquina.

// const port = 3000;
// Esta línea define el puerto en el que el servidor va a escuchar las solicitudes. El puerto 3000 es un puerto común para el desarrollo local, pero podrías usar cualquier otro puerto disponible (como 8080, 5000, etc.).

// const server = http.createServer((req, res) => { ... });
// Esta es la parte central donde se crea el servidor web.

// http.createServer() es una función del módulo http que toma una función como argumento. Esta función se ejecuta cada vez que el servidor recibe una solicitud HTTP.
// (req, res) => { ... } es una función de callback (o función anónima con sintaxis de flecha) que recibe dos objetos como parámetros:
// req (request): Representa la solicitud HTTP entrante del cliente. Contiene información como la URL solicitada, los encabezados, el método HTTP (GET, POST, etc.), y los datos enviados.
// res (response): Representa la respuesta HTTP que el servidor enviará de vuelta al cliente. Es el objeto que usaremos para construir la respuesta.
// res.statusCode = 200;
// Dentro de la función de callback, esta línea establece el código de estado HTTP de la respuesta. 200 significa "OK" y es el código estándar para una solicitud exitosa.

// res.setHeader('Content-Type', 'text/plain');
// Esta línea establece el encabezado Content-Type de la respuesta. Le dice al navegador o al cliente que la respuesta que está recibiendo es texto plano. Si estuvieras enviando HTML, sería text/html; si fuera JSON, sería application/json.

// res.end('¡Hola, Mundo!\n');
// Esta línea finaliza la respuesta y envía el contenido al cliente. ¡Hola, Mundo!\n es el texto que se mostrará en el navegador. El \n es un salto de línea.

// server.listen(port, hostname, () => { ... });
// Finalmente, esta línea inicia el servidor y lo pone a escuchar en el puerto y la dirección IP especificados.

// server.listen() es un método del objeto server que inicia el servidor.
// port y hostname son los valores que definimos anteriormente.
// () => { console.log(\Servidor corriendo en http://hostname:{port}/`); }` es otra función de callback que se ejecuta una vez que el servidor ha sido iniciado exitosamente. Simplemente imprime un mensaje en la consola para indicar que el servidor está funcionando y en qué dirección.