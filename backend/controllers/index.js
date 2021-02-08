const mongoose = require('mongoose');
const gastos = require('../models/Gastos');

const Gastos = mongoose.model('gastos');

const allExpenses = () => {
  return Gastos.find({})
};

const addExpense = (data) => {
  return Gastos.create(data)
}

const updateExpense = (id, data) => {
  return Gastos.updateOne({ _id: id }, { $set: { ...data } });
}

const deleteExpense = (id) => {
  return Gastos.deleteOne({ _id: id });
}

module.exports = { addExpense, allExpenses, updateExpense, deleteExpense };