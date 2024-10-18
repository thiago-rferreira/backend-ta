1. Configuração do ambiente
# Primeiro, certifique-se de que você tenha o Node.js, PostgreSQL e o gerenciador de pacotes npm instalados em sua máquina.

Instale as dependências necessárias:

```bash
npm install express pg axios
```

## 2. Configuração do banco de dados (PostgreSQL)

Se você ainda não tiver criado o banco, conecte-se ao PostgreSQL e execute os seguintes comandos para criar o banco e as tabelas:

```sql
CREATE DATABASE projeto_sesi;

\c projeto_sesi;

CREATE TABLE artigos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    foto TEXT,
    video VARCHAR(255),
    autor VARCHAR(255) NOT NULL,
    data_publicacao DATE NOT NULL
);

CREATE TABLE quiz (
    id SERIAL PRIMARY KEY,
    pergunta TEXT NOT NULL,
    alternativa_a TEXT NOT NULL,
    alternativa_b TEXT NOT NULL,
    alternativa_c TEXT NOT NULL,
    alternativa_d TEXT NOT NULL,
    resposta CHAR(1) NOT NULL,
    pontos INT NOT NULL,
    imagem TEXT
);
```