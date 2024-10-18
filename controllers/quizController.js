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

  listarQuiz: async (req, res) => {
    try {
      const quizzes = await Quiz.getAll();
      res.status(200).json(quizzes);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao listar quiz');
    }
  },

  obterQuizPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const quiz = await Quiz.getById(id);
      if (!quiz) {
        return res.status(404).send('Quiz não encontrado');
      }
      res.status(200).json(quiz);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao obter quiz');
    }
  },

  atualizarQuiz: async (req, res) => {
    const { id } = req.params;
    const { pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem } = req.body;
    try {
      const quiz = await Quiz.update(id, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem);
      if (!quiz) {
        return res.status(404).send('Quiz não encontrado');
      }
      res.status(200).json(quiz);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar quiz');
    }
  },

  deletarQuiz: async (req, res) => {
    const { id } = req.params;
    try {
      const quiz = await Quiz.delete(id);
      if (!quiz) {
        return res.status(404).send('Quiz não encontrado');
      }
      res.status(200).json(quiz);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar quiz');
    }
  },
};

module.exports = quizController;
