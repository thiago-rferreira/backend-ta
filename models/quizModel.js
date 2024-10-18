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

  getAll: async () => {
    const result = await pool.query('SELECT * FROM quiz');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM quiz WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem) => {
    const result = await pool.query(
      `UPDATE quiz SET pergunta = $1, alternativa_a = $2, alternativa_b = $3, alternativa_c = $4, alternativa_d = $5, resposta = $6, pontos = $7, imagem = $8 WHERE id = $9 RETURNING *`,
      [pergunta, alternativa_a, alternativa_b, alternativa_c, alternativa_d, resposta, pontos, imagem, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM quiz WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Quiz;
