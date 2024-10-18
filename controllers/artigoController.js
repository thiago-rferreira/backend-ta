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

  listarArtigos: async (req, res) => {
    try {
      const artigos = await Artigo.getAll();
      res.status(200).json(artigos);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao listar artigos');
    }
  },

  obterArtigoPorId: async (req, res) => {
    const { id } = req.params;
    try {
      const artigo = await Artigo.getById(id);
      if (!artigo) {
        return res.status(404).send('Artigo não encontrado');
      }
      res.status(200).json(artigo);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao obter artigo');
    }
  },

  atualizarArtigo: async (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo, foto, video, autor, data_publicacao } = req.body;
    try {
      const artigo = await Artigo.update(id, titulo, conteudo, foto, video, autor, data_publicacao);
      if (!artigo) {
        return res.status(404).send('Artigo não encontrado');
      }
      res.status(200).json(artigo);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar artigo');
    }
  },

  deletarArtigo: async (req, res) => {
    const { id } = req.params;
    try {
      const artigo = await Artigo.delete(id);
      if (!artigo) {
        return res.status(404).send('Artigo não encontrado');
      }
      res.status(200).json(artigo);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao deletar artigo');
    }
  },
};

module.exports = artigoController;
