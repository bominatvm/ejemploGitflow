// Importa Express
const express = require('express');


// Crea una instancia de Express
const app = express();

// Define una ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola, esto es una creacion de app en nodejs');
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});