import resetDatabase from './services/reset';
const dotenv = require('dotenv');
const path = require('path');

(async () => {
  dotenv.config({ path: path.join(__dirname, '..', '.env') });

  await resetDatabase();
})();


