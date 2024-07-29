require('dotenv/config');
const setupSwagger = require('../swagger');
const app = require('./app');

const PORT = process.env.PORT || 3333;
setupSwagger(app);


app.listen(PORT, () => console.log(`Server running or port ${PORT}`));
