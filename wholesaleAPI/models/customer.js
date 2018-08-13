var db = require('./mysqlDal');
//
function addAddress(inParams,cb) {
    var sql = 'CALL P_AddAddress(?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getAddress(inParams,cb) {
    var sql = 'CALL P_GetAddress(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getDefaultAddress(inParams,cb) {
    var sql = 'CALL P_GetDefaultAddress(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'addAddress': addAddress,
    'getAddress':getAddress,
    'getDefaultAddress':getDefaultAddress
};
module.exports = methods;