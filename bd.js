var mysql   = require('mysql');
var connection = mysql.createPool({
    host     : 'eu-cdbr-west-02.cleardb.net',
    user     : 'b0a78a0f337a6d',
    password : 'c258d06e',
    database : 'djida_bd'
});
module.exports=connection;
