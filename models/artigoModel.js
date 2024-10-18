const pool = require('../config/db');

const Artigo = {
  create: async (titulo, conteudo, foto, video, autor, data_publicacao) => {
    const result = await pool.query(
      'INSERT INTO artigos (titulo, conteudo, foto, video, autor, data_publicacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [titulo, conteudo, foto, video, autor, data_publicacao]
    );
    return result.rows[0];
  },

  // Outras operações, como listar, atualizar e deletar artigos
};

module.exports = Artigo;
