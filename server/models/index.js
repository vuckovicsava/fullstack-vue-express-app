const Sequelize = require('sequelize');
const config = require('../config');
const db = {};

const { database, user, password, options } = config.db;
const sequelize = new Sequelize({ database, user, password, ...options });

const User = sequelize.import('./User.js');

db['user'] = User;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
