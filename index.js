const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 3900;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const example = require('./routes/example');

app.use('/api/v1/example', example);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});