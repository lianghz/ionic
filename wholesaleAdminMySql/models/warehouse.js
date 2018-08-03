var db = require('./mysqlDal');


//仓库管理
function getWarehouse(inParams,cb) {
    var sql = 'CALL P_GetWarehouse(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function addWarehouse(inParams,cb) {
    var sql = 'CALL P_AddWarehouse(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function modifyWarehouse(inParams,cb) {
    var sql = 'CALL P_ModifyWarehouse(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}
//商品盘点
function addCheckStockData(inParams,cb) {
    var sql = 'CALL P_AddCheckStockData(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function checkStockWithTransation(inParams,cb) {
    var sql = 'CALL P_CheckStockWithTransation(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function getCheckStockDetail(inParams,cb) {
    var sql = 'CALL P_GetCheckStockDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function endStock(inParams,cb) {
    var sql = 'CALL P_EndStock(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}
//移库管理
function addTransferHeader(inParams,cb) {
    var sql = 'CALL P_AddTransferHeader(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function addTransferDetail(inParams,cb) {
    var sql = 'CALL P_AddTransferDetail(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}
function getTransferHeader(inParams,cb) {
    var sql = 'CALL P_GetTransferHeader(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        
        cb(rows);
    });
}

function getTransferDetail(inParams,cb) {
    var sql = 'CALL P_GetTransferDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function checkOutTransfer(inParams,cb) {
    var sql = 'CALL P_CheckOutTransfer(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function receiveTransfer(inParams,cb) {
    var sql = 'CALL P_ReceiveTransfer(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getTransferForPrint(inParams,cb) {
    var sql = 'CALL P_GetTransferForPrint(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function printTransfer(inParams,cb) {
    var sql = 'CALL P_PrintTransfer(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

//转包装管理
function getChangePackageTransation(inParams,cb) {
    var sql = 'CALL P_GetChangePackageTransation(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function changePackage(inParams,cb) {
    var sql = 'CALL P_ChangePackage(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}



var methods = {
    'getWarehouse': getWarehouse,
    'addWarehouse':addWarehouse,
    'modifyWarehouse':modifyWarehouse,
    'addCheckStockData':addCheckStockData,
    'checkStockWithTransation':checkStockWithTransation,
    'getCheckStockDetail':getCheckStockDetail,
    'endStock':endStock,
    'addTransferHeader':addTransferHeader,
    'addTransferDetail':addTransferDetail,
    'getTransferHeader':getTransferHeader,
    'getTransferDetail':getTransferDetail,
    'checkOutTransfer':checkOutTransfer,
    'receiveTransfer':receiveTransfer,
    'getTransferForPrint':getTransferForPrint,
    'printTransfer':printTransfer,
    'getChangePackageTransation':getChangePackageTransation,
    'changePackage':changePackage
};
module.exports = methods;