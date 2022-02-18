const { Sequelize } = require('sequelize');
const logger = require('pino')()
const { initModels } = require('../db/index')


initDBConnection = async function (host, database, username, password) {
    const sequelize = new Sequelize(database, username, password, {
        host: host,
        dialect: 'mariadb',
        port: '3306',
        logging: false
    });

    try {
        await sequelize.authenticate()
    } catch (err) {
        logger.error(`Could not connect to DB with: DataBase: ${database}, Host: ${host}, User: ${username}, Password: ${password}`)
        process.exit(1)
    }

    initModels(sequelize)
    return sequelize
}

module.exports = { initDBConnection }