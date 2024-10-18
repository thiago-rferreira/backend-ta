// index.js
const express = require('express');
const artigoRoutes = require('./routes/artigoRoutes');
const quizRoutes = require('./routes/quizRoutes');
const externalApiService = require('./services/externalApiService');

const app = express();
app.use(express.json()); // Middleware para lidar com JSON

// Rota de teste para conexão ao banco de dados
app.get('/test', async (req, res) => {
  res.send('API funcionando!');
});

// Usando as rotas dos artigos e do quiz
app.use('/api', artigoRoutes);
app.use('/api', quizRoutes);

// Rota de exemplo para chamar uma API externa
app.get('/external-api', async (req, res) => {
  try {
    const posts = await externalApiService.fetchPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Erro ao buscar dados da API externa');
  }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
