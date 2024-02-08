// Importa Express
const express = require('express');
const app = express();

// Define una ruta
app.get('/', (req, res) => {
  res.send('Messi te amo');
});

// Inicia el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
