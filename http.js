const express = require('express');
const app = express();

// GET é usado para obter recursos
app.get('/recurso', (req, res) => {
  res.send('Este é um recurso');
});

// POST é usado para criar recursos
app.post('/recurso', (req, res) => {
  res.send('Recurso criado');
});

// PUT é usado para atualizar recursos
app.put('/recurso', (req, res) => {
  res.send('Recurso atualizado');
});

// DELETE é usado para deletar recursos
app.delete('/recurso', (req, res) => {
  res.send('Recurso deletado');
});

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});

/*

WSDL (Web Services Description Language) é um formato XML que descreve serviços web.
Ele fornece informações sobre a localização do serviço, os métodos disponíveis,
os tipos de dados esperados como entrada e saída, e outras informações relevantes para acessar e usar o serviço.

A sigla WSDL significa "Linguagem de Descrição de Serviços Web".
A função do WSDL é permitir que os clientes entendam e usem o serviço sem precisar conhecer os detalhes da implementação.
Ao invés disso, eles apenas precisam seguir as informações fornecidas no WSDL para se comunicar com o serviço.
Isso torna mais fácil para os desenvolvedores criarem aplicativos que utilizem serviços web e
facilita a integração entre sistemas diferentes.

*/