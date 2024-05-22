const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// endpoint to exec python code
app.post('/execute', (req, res) => {
  const { code } = req.body;
  const filePath = path.join(__dirname, 'temp.py');

  // write code to temp file
  require('fs').writeFileSync(filePath, code);

  // execute python code
  exec('python ${filePath}', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr);
    } else {
      res.send(stdout)
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
