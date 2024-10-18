// controllers/artigoController.js
const Artigo = require('../models/artigoModel');

const artigoController = {
  criarArtigo: async (req, res) => {
    const { titulo, conteudo, foto, video, autor, data_publicacao } = req.body;
    try {
      const artigo = await Artigo.create(titulo, conteudo, foto, video, autor, data_publicacao);
      res.status(201).json(artigo);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar artigo');
    }
  },

  // Outros métodos como listar, atualizar, e excluir artigos
};

module.exports = artigoController;
