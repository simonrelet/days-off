const express = require('express');
const bodyParser = require('body-parser');
const pkg = require('./package');

const app = express();
const port = process.env.SERVICE_PORT || 3000;
const usernamePattern = /^[a-z]{4,}$/;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function log(...args) {
  console.info(`[${pkg.name}][info]`, ...args);
}

app.post('/api/login', (req, res) => {
  log(`POST / ${JSON.stringify(req.body)}`);

  const { username, password } = req.body;
  if (!username || !password || !usernamePattern.test(username)) {
    res.status(400).json({ message: 'Invalid username or password' });
    return;
  }

  const token = Buffer.from(`${username}:${password}`).toString('base64');
  res.json({ token });
});

app.listen(port, () => {
  log(`listening on port ${port}`);
});
