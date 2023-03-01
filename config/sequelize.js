const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'testing',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection OK');
    }catch(error) {
        console.error('Connection Failed: ', error);
    }
})();

module.exports = sequelize;