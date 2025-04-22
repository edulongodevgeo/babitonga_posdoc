const axios = require('axios');

// Substitua pela URL do seu Apps Script
const url = 'https://script.google.com/macros/s/AKfycbwnKmDPDxLl563fKX4OePO0_RalTsNtR9uAM5sJP5qSuskJs_eN9NI7wFgR_ureTn_G/exec';

const dados = {
  timestamp: new Date().toISOString(),
  dimensao: 'Ambiental',
  pergunta1: 'Resposta para P1',
  pergunta2: 'Resposta para P2',
  pergunta3: 'Resposta para P3',
  gridId: 'Grid-ABC-123',
  latitude: -27.5954,
  longitude: -48.5480
};

axios.post(url, dados)
  .then(response => {
    console.log('✅ Sucesso:', response.data);
  })
  .catch(error => {
    console.error('❌ Erro:', error.response ? error.response.data : error.message);
  });
