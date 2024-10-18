// routes/quizRoutes.js
const express = require('express');
const quizController = require('../controllers/quizController');
const router = express.Router();

router.post('/quiz', quizController.criarQuiz);

// Outras rotas para listar, atualizar e excluir perguntas do quiz

module.exports = router;
