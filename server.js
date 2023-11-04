const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/devices', (req, res) => {
  exec('arp -a', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      res.status(500).send('Internal Server Error');
      return;
    }
    const devices = parseArpOutput(stdout);
    res.json(devices);
  });
});

function parseArpOutput(output) {
  // Parse the arp output and extract device information
  // Return the parsed data as an array or object
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
