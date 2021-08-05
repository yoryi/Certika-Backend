const mysql = require('mysql2')
const { database } = require('../utils/key')
const { promisify } = require('util')

//Conexion Mysql
const connect = mysql.createPool(database)
connect.getConnection((Err, conection ) =>{

    if(Err){
        if(Err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('BASE DE DATOS FUE CERRADA.')
        }
        if(Err.code === 'ER_CON_COUNT_ERROR'){
            console.error('BASE DE DATOS TIENE MUCHAS CONEXIONES.')
        }
        if(Err.code === 'ECONNREFUSED'){
            console.error('LA CONEXION FUE RECHAZADA.')
        }
    }

    if(conection) conection.release();
    console.log('db conectada');
    return;
});

//Promisify
connect.query = promisify(connect.query);
module.exports = connect
