const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// Import your Sequelize instance and models
const sequelize = require('./models').sequelize; // Use the correct path here
const homeRoutes = require('./controllers/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ... (other middleware setup)

// Use your routes
app.use('/api', homeRoutes); // Assuming you want your routes to be under the '/api' path

// Sync the models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error syncing models:', error);
});