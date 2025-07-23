const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(express.static(__dirname));

app.post('/views', (req, res) => {
  const filePath = 'data.json';

  let data = { views: 0 };

  // Lire les données
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  // Incrémenter les vues
  data.views += 1;

  // Sauvegarder
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
