// models/artigoModel.js
const pool = require('../config/db');

const Artigo = {
  create: async (titulo, conteudo, foto, video, autor, data_publicacao) => {
    const result = await pool.query(
      'INSERT INTO artigos (titulo, conteudo, foto, video, autor, data_publicacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [titulo, conteudo, foto, video, autor, data_publicacao]
    );
    return result.rows[0];
  },

  getAll: async () => {
    const result = await pool.query('SELECT * FROM artigos');
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query('SELECT * FROM artigos WHERE id = $1', [id]);
    return result.rows[0];
  },

  update: async (id, titulo, conteudo, foto, video, autor, data_publicacao) => {
    const result = await pool.query(
      `UPDATE artigos SET titulo = $1, conteudo = $2, foto = $3, video = $4, autor = $5, data_publicacao = $6 WHERE id = $7 RETURNING *`,
      [titulo, conteudo, foto, video, autor, data_publicacao, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM artigos WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },
};

module.exports = Artigo;
