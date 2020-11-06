const express = require('express');
const router = express.Router();
const controller = require('../controllers/ghibli-controller')

/**
@route GET ghiblis
@desc Retornar todas os filmes Ghibli cadastrados
@access Public 
@endpoint http://localhost:porta/ghiblis
**/
router.get('/ghiblis', controller.getGhiblis)

/**
@route POST ghiblis
@desc Criar um ghibli
@access Public 
@endpoint http://localhost:porta/ghiblis
**/
router.post('/ghiblis', controller.addGhibli)


/**
@route GET ghiblis/:id
@desc Retornar apenas um único ghibli pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/ghibli/:id
**/
router.get('/ghiblis/:id', controller.getGhibliById)


/**
@route PUT ghiblis
@desc Alterar um ghibli pelo seu identificador
@access Public 
@endpoint http://localhost:porta/ghibli/:id
**/
router.put('/ghibli/:id', controller.updateGhibli)


/**
@route DELETE ghibli
@desc Deletar um ghibli pelo seu identificador
@access Public 
@endpoint http://localhost:porta/ghibli/:id
**/
router.delete('/ghibli/:id', controller.deleteGhibli)

module.exports = router