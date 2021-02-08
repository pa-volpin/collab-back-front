const mongoose = require('mongoose');

const gastosSchema = new mongoose.Schema({
  title: { type: String },
  valor: { type: Number }
}, { collection : 'Gastos' });

const gastos = mongoose.model('gastos', gastosSchema);

module.exports = gastos;