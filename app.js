const express = require('express');
const app = express();
const port = 3000;

// Configuración de archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡UPCN!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
