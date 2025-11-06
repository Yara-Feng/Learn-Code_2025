const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});