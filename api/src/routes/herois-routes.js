const express = require('express');
const router = express.Router();
const controller = require('../controllers/herois-controller')

/**
@route GET herois
@desc Retornar todas os herois cadastrados
@access Public 
@endpoint http://localhost:porta/herois
**/
router.get('/herois', controller.getHerois)


/**
@route POST herois
@desc Criar um heroi
@access Public 
@endpoint http://localhost:porta/herois
**/
router.post('/herois', controller.addHeroi)


/**
@route GET herois/:id
@desc Retornar apenas uma única herói pelo seu id: identificador
@access Public 
@endpoint http://localhost:porta/tarefas/:id
**/
router.get('/herois/:id', controller.getHeroisById)


/**
@route PUT herois
@desc Alterar uma tarefa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/herois/:id
**/
router.put('/herois/:id', controller.updateHeroi)


/**
@route DELETE herois
@desc Deletar um heroi pelo seu identificador
@access Public 
@endpoint http://localhost:porta/herois/:id
**/
router.delete('/herois/:id', controller.deleteHeroi)

module.exports = router