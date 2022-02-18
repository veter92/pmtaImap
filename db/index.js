const {initLogModel} = require('./logModel');

initModels =  function(sequelize){
    return {
        'logs': initLogModel(sequelize)
    }
}

module.exports = {initModels}