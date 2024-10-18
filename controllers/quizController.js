// controllers/quizController.js
const Quiz = require('../models/quizModel');

const quizController = {
  criarQuiz: async (req, res) => {
    const { pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem } = req.body;
    try {
      const quiz = await Quiz.create(pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem);
      res.status(201).json(quiz);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar pergunta ao quiz');
    }
  },

  // Outros métodos como listar, atualizar, e excluir quiz
};

module.exports = quizController;
