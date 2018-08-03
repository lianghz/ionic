var db = require('./mysqlDal');


//价表管理
function addPriceList(inParams,cb) {
    var sql = 'CALL P_AddPriceList(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPriceList(inParams,cb) {
    var sql = 'CALL P_GetPriceList(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPriceDetail(inParams,cb) {
    var sql = 'CALL P_GetPriceDetail(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPriceDetailNotIn(inParams,cb) {
    var sql = 'CALL P_GetPriceDetailNotIn(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function modifyPriceList(inParams,cb) {
    var sql = 'CALL P_ModifyPriceList(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}


function modifyPriceListDetails(inParams,cb) {
    var sql = 'CALL P_ModifyPriceListDetails(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

//促销管理
function addPromotionAdjust(inParams,cb){
    var sql = 'CALL P_AddPromotionAdjust(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getPromotionAdjust(inParams,cb){
    var sql = 'CALL P_GetPromotionAdjust(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function createPromotionResult(inParams,cb){
    var sql = 'CALL P_CreatePromotionResult';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}




var methods = {
    'addPriceList': addPriceList,
    'getPriceList':getPriceList,
    'getPriceDetail':getPriceDetail,
    'modifyPriceListDetails':modifyPriceListDetails,
    'modifyPriceList':modifyPriceList,
    'getPriceDetailNotIn':getPriceDetailNotIn,
    'addPromotionAdjust':addPromotionAdjust,
    'getPromotionAdjust':getPromotionAdjust,
    'createPromotionResult':createPromotionResult
};
module.exports = methods;