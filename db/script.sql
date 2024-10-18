CREATE DATABASE projeto_sesi;

CREATE TABLE artigos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    foto TEXT, -- Para armazenar a url de uma imagem da internet
    video VARCHAR(255), -- URL de um vídeo do youtube
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
    resposta CHAR(1) NOT NULL, -- A resposta será uma letra (A, B, C ou D)
    pontos INT NOT NULL,
    imagem TEXT -- Para armazenar a url de uma imagem da internet
);
