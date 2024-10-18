// routes/artigoRoutes.js
const express = require('express');
const artigoController = require('../controllers/artigoController');
const router = express.Router();

router.post('/artigos', artigoController.criarArtigo);

// Outras rotas para listar, atualizar e excluir artigos

module.exports = router;
