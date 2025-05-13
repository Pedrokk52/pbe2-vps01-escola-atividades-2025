const express = require('express');
const routes = express.Router();

const Aluno = require('./controllers/alunos')

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola ACME' });
});

routes.post('/alunos',Aluno.create);
routes.get('/alunos',Aluno.read);

module.exports = routes;