var db = require('./mysqlDal');


function addOtherBankrollRecord(inParams,cb) {
    var sql = 'CALL P_AddOtherBankrollRecord(?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getOtherBankrollRecord(inParams,cb) {
    var sql = 'CALL P_GetOtherBankrollRecord(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPaymentHeader(inParams,cb) {
    var sql = 'CALL P_GetPaymentHeader(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPaymentDetail(inParams,cb) {
    var sql = 'CALL P_GetPaymentDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function setPaymentStatus(inParams,cb) {
    var sql = 'CALL P_SetPaymentStatus(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function addCheckCashData(inParams,cb) {
    var sql = 'CALL P_AddCheckCashData(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getCheckCashDetail(inParams,cb) {
    var sql = 'CALL P_GetCheckCashDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function checkCashWithTransation(inParams,cb) {
    var sql = 'CALL P_CheckCashWithTransation(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function endCash(inParams,cb) {
    var sql = 'CALL P_EndCash(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}


var methods = {
    'addOtherBankrollRecord': addOtherBankrollRecord,
    'getOtherBankrollRecord':getOtherBankrollRecord,
    'getPaymentHeader':getPaymentHeader,
    'getPaymentDetail':getPaymentDetail,
    'setPaymentStatus':setPaymentStatus,
    'addCheckCashData':addCheckCashData,
    'getCheckCashDetail':getCheckCashDetail,
    'checkCashWithTransation':checkCashWithTransation,
    'endCash':endCash
};
module.exports = methods;