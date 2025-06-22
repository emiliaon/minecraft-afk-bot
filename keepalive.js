const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ El bot está corriendo');
});

app.listen(3000, () => {
  console.log('🟢 KeepAlive activo en el puerto 3000');
});
