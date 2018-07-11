var db = require('./mysqlDal');


function getSupplier(inParams,cb) {
    var sql = 'CALL P_GetSupplier(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function modifySupplier(inParams,cb) {
    var sql = 'CALL P_ModifySupplier(?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getSupplierGoodsPrice(inParams,cb) {
    var sql = 'CALL P_GetSupplierGoodsPrice(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function modifySupplierGoodsPrice(inParams,cb) {
    var sql = 'CALL P_ModifySupplierGoodsPrice(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function deleteSupplierGoodsPrice(inParams,cb) {
    var sql = 'CALL P_DeleteSupplierGoodsPrice(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getPurchaseHeader(inParams,cb) {
    var sql = 'CALL P_GetPurchaseHeader(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getPurchaseDetail(inParams,cb) {
    var sql = 'CALL P_GetPurchaseDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function addPurchaseHeader(inParams,cb) {
    var sql = 'CALL P_AddPurchaseHeader(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function addPurchaseDetail(inParams,cb) {
    var sql = 'CALL P_AddPurchaseDetail(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function setPurchaseStatus(inParams,cb) {
    var sql = 'CALL P_SetPurchaseStatus(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}


var methods = {
    'getSupplier': getSupplier,
    'modifySupplier':modifySupplier,
    'getSupplierGoodsPrice':getSupplierGoodsPrice,
    'modifySupplierGoodsPrice':modifySupplierGoodsPrice,
    'deleteSupplierGoodsPrice':deleteSupplierGoodsPrice,
    'getPurchaseHeader':getPurchaseHeader,
    'getPurchaseDetail':getPurchaseDetail,
    'addPurchaseHeader':addPurchaseHeader,
    'addPurchaseDetail':addPurchaseDetail,
    'setPurchaseStatus':setPurchaseStatus
};
module.exports = methods;