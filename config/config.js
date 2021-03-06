
var fs = require('fs');

module.exports = init;

function init() {

    var enviar;

    if (fs.existsSync("./config/local.js")) {
        enviar = require('../config/local.js');  
        console.log('BUENOS DIAS'); 
    }
    else {
        enviar = {
            rush: {
                user: process.env.RUSH_USUARIO_DB,
                pass: process.env.RUSH_PASS_DB,
                serverDB: process.env.RUSH_SERVER_DB
            },
            meteo: { 
                apikey: process.env.METEO_APIKEY 
            },
            spotify: {
                secret: process.env.SECRET_SPOTIFY,
                public: process.env.PUBLIC_SPOTIFY
            },
            bnet: {
                id: process.env.BNET_ID,
                secret: process.env.BNET_SECRET
            }
                
        }
    }
    return enviar;
}