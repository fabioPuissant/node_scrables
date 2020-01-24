var pad = require('path');

// Heel het pad
console.log(`Volledig pad: ${pad.dirname(__dirname)}`);

// Enkel de bestandsnaam
console.log(`Enkel de bestandsnaam: ${pad.basename(__filename)}`);
