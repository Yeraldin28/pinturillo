const express = require('express');
const path = require('path');

const app = express();

// Configura la carpeta "build" de React para servir como carpeta estática
app.use(express.static(path.join(__dirname, 'ui/whiteboard-collab/build')));



// Configura una ruta para que todas las demás solicitudes se dirijan a la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ui/whiteboard-collab/src/App.js', 'index.html'));
});

// Inicia el servidor en el puerto 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
