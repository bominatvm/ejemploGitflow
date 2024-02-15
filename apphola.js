const express = require ('express');
const hola = express ();

hola.get ('/', (req, res) => {
    res.send('¡Hola a todos, un Gusto!')
});

const PORT = process.env.PORT || 3000;
    hola.listen(PORT, () => {
        console.log ('Servidor corriendo en http://localhost:3000');
    });