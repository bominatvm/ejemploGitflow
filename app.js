// Importar el módulo express
// const express = require('express');

// // Crear una instancia de la aplicación Express
// const app = express();

// // Ruta principal que responde con Hola, mundo!
// app.get('/', (req, res) => {
//   res.send('Hola, mundo!');
// });

// // Puerto en el que la aplicación escuchará las solicitudes
// const puerto = 3000;

// // Iniciar el servidor y escuchar en el puerto especificado
// const server = app.listen(puerto, () => {
//   console.log();
  
//   // Cerrar el servidor después de 5 segundos
//   setTimeout(() => {
//     console.log('Cerrando el servidor después de 5 segundos');
//     server.close();
//   }, 5000);
// });
console.log('Hola, mi nombre es Iván');

const ahora = new Date();
const fechaFormateada = `${ahora.getFullYear()}-${ahora.getMonth() + 1}-${ahora.getDate()}`;
const horaFormateada = `${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;

console.log('Fecha formateada:', fechaFormateada);
console.log('Hora formateada:', horaFormateada);