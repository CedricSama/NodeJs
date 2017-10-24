let { Sequelize } = require('sequelize');
let config = require('../config');
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host:"127.0.0.1",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});
// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

module.exports = User;