const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth.js');

const app = express();

// middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/auth', authRoutes);

// sequelize
sequelize.sync().then(() => {
  // start listening
  app.listen(config.port, () =>
    console.log(`Started server on port ${config.port}`)
  );
});
