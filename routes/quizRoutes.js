// routes/quizRoutes.js
const express = require('express');
const quizController = require('../controllers/quizController');
const router = express.Router();

router.post('/quiz', quizController.criarQuiz);
router.get('/quiz', quizController.listarQuiz);
router.get('/quiz/:id', quizController.obterQuizPorId);
router.put('/quiz/:id', quizController.atualizarQuiz);
router.delete('/quiz/:id', quizController.deletarQuiz);

module.exports = router;
