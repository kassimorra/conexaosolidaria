const Config = require('../configs/config');
const DBService = require('../services/db/db.service');
const UsersSchema = require('../../back_end/modules/users/users.schema');

module.exports = () => {
    DBService.DB.init(Config.name, Config.DB.url, {});
    DBService.Model.init(Config.name, 'Users', UsersSchema);
};
