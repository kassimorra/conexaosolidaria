var  environment = 'development';
var  Config;

try {
    //environment = process.env.NODE_ENV;
    Config = require(`./config.${environment}`);
} catch (exception) {
    Config = require('./config.development');
}

Config.name = 'NOME_CONFIGURAÇÃO';

Config.Credentials = {
    secret: 'y#9wer@ypqw267345'
};

module.exports = Config;