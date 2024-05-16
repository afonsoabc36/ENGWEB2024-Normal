var express = require('express');
var router = express.Router();
var contratosController = require('../controllers/contrato');

router.get('/favicon.ico', function(req, res){

});

// GET /contratos: devolve uma lista com todos os registos
router.get('/', function(req, res, next) {
    if (req.query.entidade) {
        contratosController.findByEntidade(req.query.entidade)
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));
    } else if (req.query.tipo) {
        contratosController.findByTipoProcedimento(req.query.tipo)
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));
    } else {
        contratosController.list()
            .then(data => res.jsonp(data))
            .catch(err => res.status(500).jsonp(err));  
    }
});


// GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições
router.get('/entidades', function(req, res, next) {
    contratosController.listEntidades()
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

// GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições
router.get('/tipos', function(req, res, next) {
    contratosController.findTiposDeProcedimento()
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});
// GET /contratos/:id: devolve o registo com identificador id (corresponde ao idcontrato)
router.get('/:id', function(req, res, next) {
    contratosController.findById(req.params.id)
        .then(data => {
            if (data) res.jsonp(data);
            else res.status(404).send('Contrato não encontrado');
        })
        .catch(err => res.status(500).jsonp(err));
});

// POST /contratos: acrescenta um registo novo à BD
router.post('/', function(req, res, next) {
    contratosController.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(err => res.status(500).jsonp(err));
});

// DELETE /contratos/:id: elimina da BD o registo com o identificador id
router.delete('/:id', function(req, res, next) {
    contratosController.remove(req.params.id)
        .then(data => {
            if (data) res.status(204).send();
            else res.status(404).send('Contrato não encontrado');
        })
        .catch(err => res.status(500).jsonp(err));
});

// PUT /contratos/:id: altera o registo com o identificador id
router.put('/:id', function(req, res, next) {
    contratosController.update(req.params.id, req.body)
        .then(data => {
            if (data) res.jsonp(data);
            else res.status(404).send('Contrato não encontrado');
        })
        .catch(err => res.status(500).jsonp(err));
});

module.exports = router;
