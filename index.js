// index.js
const express = require('express');
const artigoRoutes = require('./routes/artigoRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
app.use(express.json()); // Middleware para lidar com JSON

// Rota de teste para conexão ao banco de dados
app.get('/teste', (req, res) => {
  res.send('API funcionando!');
});

// Usando as rotas dos artigos e do quiz
app.use('/api', artigoRoutes);
app.use('/api', quizRoutes);

// Iniciando o servidor
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
