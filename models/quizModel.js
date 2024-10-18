// models/quizModel.js
const pool = require('../config/db');

const Quiz = {
  create: async (pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem) => {
    const result = await pool.query(
      'INSERT INTO quiz (pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem]
    );
    return result.rows[0];
  },

  // Outras operações, como listar, atualizar e deletar perguntas do quiz
};

module.exports = Quiz;
