const express = require("express");
const router = express.Router();


const { create, findAll, update, findOne} = require('../controllers/direcciones.controller.js');

router.get('/', findAll);

router.get('/:id', findOne);

router.post('/', create);

router.put('/:id', update);

// router.delete('/:id', delete);

module.exports = router;