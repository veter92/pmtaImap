const { initServer } = require('./server/index')
const { initDBConnection, connections } = require('./server/db');
const { setMaxListeners } = require('imap');
const { initModels } = require('./db/index');

require('dotenv').config();



(async () => {
    // INIT WEB SERVER
    initServer(process.env.PORT)

    let connection = await initDBConnection(
        process.env.DB_HOST,
        process.env.DB_DATABASE,
        process.env.DB_USER,
        process.env.DB_PASSWORD
    )

    connection.models.logs.create({ sender: 'Petuh', headers: 'TRUE PETUH' })






})();


// console.log(connection.then(function(sequelize){
//     console.log(sequelize.models.logs)
// }))
// Insert test
// connection.models.logs.create({sender: 'Petuh', headers: 'TRUE PETUH'})




