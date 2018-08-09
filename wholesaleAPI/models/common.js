var db = require('./mysqlDal');
//
function getItemData(inParams,cb) {
    var sql = 'CALL P_GetItemData(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getFunctionCtroll(inParams,cb) {
    var sql = 'CALL P_GetFunctionCtroll(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function setFunctionCtroll(inParams,cb) {
    var sql = 'CALL P_SetFunctionCtroll(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getArea(inParams,cb) {
    var sql = 'CALL P_GetArea(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'getItemData': getItemData,
    'getFunctionCtroll':getFunctionCtroll,
    'setFunctionCtroll':setFunctionCtroll,
    'getArea':getArea
};
module.exports = methods;