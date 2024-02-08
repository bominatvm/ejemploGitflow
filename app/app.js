// Importa el módulo Express
const express = require('express');
const path = require('path');

// Crea una nueva aplicación Express
const app = express();

// Sirve los archivos estáticos del directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define el puerto
const port = 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
