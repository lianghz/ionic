var db = {};
var credentials = require('./../credentials');
var mysql = require('mysql');

var pool = mysql.createPool(credentials.mysql.connectionString);

db.query = function (sql, parameter, callback) {
  pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);
    conn.query(sql,parameter, function (err, rows,fields) {
      if (err) {
        console.log(err);
        callback(err, null);
      };
      // console.log("SELECT ==> ");
      // for (var i in rows) {
      //   console.log(rows[i]);
      // }
      callback(null, rows, fields);
      conn.release();
    });
  });
}

module.exports = db;

///demo
// var db = require('./mysql.js');  
// var sql = 'SELECT count(*) as count from user';  
// db.query(sql, function(err, rows, fields){  
//     if (err) {  
//         console.log(err);  
//         return;  
//     }  
//     console.log('用户数量 : ', rows[0].count);  
// });