var db = require('./mysqlDal');


function getReceiveHeader(inParams,cb) {
    var sql = 'CALL P_GetReceiveHeader(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function modifyReceive(inParams,cb) {
    var sql = 'CALL P_ModifyReceive(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getReceive(inParams,cb) {
    var sql = 'CALL P_GetReceive(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getReceiveDetail(inParams,cb) {
    var sql = 'CALL P_GetReceiveDetail(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function setReceiveHeaderStatus(inParams,cb) {
    var sql = 'CALL P_SetReceiveHeaderStatus(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function backupSettlementedData(inParams,cb) {
    var sql = 'CALL P_BackupSettlementedData(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}



var methods = {
    'getReceiveHeader': getReceiveHeader,
    'modifyReceive':modifyReceive,
    'getReceive':getReceive,
    'setReceiveHeaderStatus':setReceiveHeaderStatus,
    'getReceiveDetail':getReceiveDetail,
    'backupSettlementedData':backupSettlementedData,
};
module.exports = methods;