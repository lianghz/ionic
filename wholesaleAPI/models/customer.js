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
function modfiyCustomerToken(inParams,cb) {
    var sql = 'CALL P_ModfiyCustomerToken(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("P_ModfiyCustomerToken=" + err);
            return;
        }
        cb(rows);
    });
}

function getCustomerToken(inParams,cb) {
    var sql = 'CALL P_GetCustomerToken(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("P_GetCustomerToken=" + err);
            return;
        }
        cb(rows[0]);
    });
}
function login(inParams,cb) {
    var sql = 'CALL P_Login(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("P_Login=" + err);
            return;
        }
        cb(rows[0]);
    });
}



var methods = {
    'addAddress': addAddress,
    'getAddress':getAddress,
    'getDefaultAddress':getDefaultAddress,
    'modfiyCustomerToken':modfiyCustomerToken,
    'getCustomerToken':getCustomerToken,
    'login':login
};
module.exports = methods;