
// Crear una nueva fecha
const fecha = new Date();

// Obtener la fecha en formato ISO y ajustar el formato
const fechaSQL = fecha.toISOString().slice(0, 19).replace('T', ' ');

module.exports = fechaSQL;