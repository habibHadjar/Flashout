const express = require('express');
const db = require('./services/db');
const userRoutes = require('./components/users/routes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
});
