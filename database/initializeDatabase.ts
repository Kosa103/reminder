import initializeDatabase from './services/initialize';
const dotenv = require('dotenv');
const path = require('path');

(async () => {
  dotenv.config({ path: path.join(__dirname, '..', '.env') });

  await initializeDatabase();
})();
