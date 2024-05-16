var express = require('express');
var router = express.Router();
var axios = require('axios');

const apiUrl = process.env.API_URL || 'http://localhost:3000';

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get(`${apiUrl}/contratos`);
    res.render('contratos', { title: 'Contratos', contratos: response.data });
  } catch (error) {
    console.error(error);
    res.send("Erro ao recuperar contratos");
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    const response = await axios.get(`${apiUrl}/contratos${req.url}`)
    res.render('contract', { title: 'Detalhes do Contrato', contrato: response.data });
  } catch (error) {
    console.error(error);
    res.send("Erro ao recuperar contratos");
  }
});

router.get('/entidades/:nipc', async function(req, res, next) {
  try {
    const response = await axios.get(`${apiUrl}/contratos?entidade=${req.params.nipc}`);
    const entidade = response.data[0].entidade_comunicante;
    const entidadeNIPC = response.data[0].NIPC_entidade_comunicante;
    res.render('entity', {
      title: 'Detalhes da Entidade', 
      entidade: entidade,
      entidadeNIPC : entidadeNIPC,
      contratos: response.data,
      total: response.data.reduce((sum, contrato) => sum + contrato.precoContratual, 0)
    });    
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao recuperar dados da entidade");
  }
});

module.exports = router;

