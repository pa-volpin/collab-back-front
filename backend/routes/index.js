const express = require('express');
const { allExpenses, addExpense, updateExpense, deleteExpense } = require('../controllers');
const router = express();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.route('/gastos')
  .get(async (req, res) => {
    const response = await allExpenses();
    res.send(response)
  })
  .post(async (req, res) => {
      await addExpense(req.body);
      res.send('Post realizado com sucesso');
  });

router.route('/gastos/:id')
  .put(async (req, res) => {
      const { id } = req.params;
      const { body } = req;
      await updateExpense(id, body);
      res.send('Update realizado com sucesso');
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    await deleteExpense(id);
    res.send('Delete realizado com sucesso');
})
  

router.get('*', function(req, res){
  res.send('what???', 404);
});

module.exports = router;