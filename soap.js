const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text({ type: 'text/xml' }));

app.post('/soap', (req, res) => {
  console.log('Recebendo requisição SOAP:', req.body);

  const soapResponse = `
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
      <!-- Conteúdo da resposta -->
    </soap:Body>
  </soap:Envelope>
  `;

  res.set('Content-Type', 'text/xml');
  res.send(soapResponse);
});

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000');
});
