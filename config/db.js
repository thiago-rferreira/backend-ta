const { Pool } = require('pg');

// Configurando a conexão com o banco de dados
const pool = new Pool({
  user: 'postgress', // Substitua pelo seu usuário do PostgreSQL
  host: 'localhost',
  database: 'projeto_sesi',
  password: 'ds564', // Substitua pela sua senha
  port: 5432, // Substitua pela porta do seu PostgreSQL
});

module.exports = pool;
