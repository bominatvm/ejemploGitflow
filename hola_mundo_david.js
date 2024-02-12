// Importar el módulo http de Node.js
const http = require('http');

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Crear un servidor HTTP simple que responde con "Hola Mundo" a todas las solicitudes
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo\n');
});

// Escuchar en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
