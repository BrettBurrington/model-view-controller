const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');


const sequelize = require('./models').sequelize; // 
const homeRoutes = require('./controllers/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ... (other middleware setup)

// Use your routes
app.use('/api', homeRoutes); 


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error syncing models:', error);
});
