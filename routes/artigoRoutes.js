// routes/artigoRoutes.js
const express = require('express');
const artigoController = require('../controllers/artigoController');
const router = express.Router();

router.post('/artigos', artigoController.criarArtigo);
router.get('/artigos', artigoController.listarArtigos);
router.get('/artigos/:id', artigoController.obterArtigoPorId);
router.put('/artigos/:id', artigoController.atualizarArtigo);
router.delete('/artigos/:id', artigoController.deletarArtigo);

module.exports = router;
