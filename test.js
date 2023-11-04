const { exec } = require('child_process');

exec('arp -a', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Devices on the network:\n${stdout}`);
});