var db = require('./mysqlDal');
//
function getOrderByWarehouse(inParams,cb) {
    var sql = 'CALL P_GetOrderByWarehouse(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function convertDocument(inParams,cb) {
    var sql = 'CALL P_ConvertDocument(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getDocumentList(inParams,cb) {
    var sql = 'CALL P_GetDocumentList(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function addLoadDocument(inParams,cb) {
    var sql = 'CALL P_AddLoadDocument(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getLoadList(inParams,cb) {
    var sql = 'CALL P_GetLoadList(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getDocumentByLoad(inParams,cb) {
    var sql = 'CALL P_GetDocumentByLoad(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getDocumentDetail(inParams,cb) {
    var sql = 'CALL P_GetDocumentDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function deleteDocumentFromLoad(inParams,cb) {
    var sql = 'CALL P_DeleteDocumentFromLoad(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function setLoadCheckOut(inParams,cb) {
    var sql = 'CALL P_SetLoadCheckOut(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getReturnList(inParams,cb) {
    var sql = 'CALL P_GetReturnList(?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getReturnDetail(inParams,cb) {
    var sql = 'CALL P_GetReturnDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function addReturn(inParams,cb) {
    var sql = 'CALL P_AddReturn(?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getDocumentHeaderHist(inParams,cb) {
    var sql = 'CALL P_GetDocumentHeaderHist(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getDocumentDetailHist(inParams,cb) {
    var sql = 'CALL P_GetDocumentDetailHist(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function createReturnDocument(inParams,cb) {
    var sql = 'CALL P_CreateReturnDocument(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function modifyDocument(inParams,cb) {
    var sql = 'CALL P_ModifyDocument(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getLoadForCheck(inParams,cb) {
    var sql = 'CALL P_GetLoadForCheck(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function checkLoad(inParams,cb) {
    var sql = 'CALL P_CheckLoad(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

//========客户端======================
function addShoppingCar(inParams,cb) {
    var sql = 'CALL P_AddShoppingCar(?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}
function getCarGoods(inParams,cb) {
    var sql = 'CALL P_GetCarGoods(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function getCarCount(inParams,cb) {
    var sql = 'CALL P_GetCarCount(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("ERR P_GetCarCount=" + err);
            return;
        }
        cb(rows);
    });
}

function convertOrder(inParams,cb) {
    var sql = 'CALL P_GetCarCount(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("ERR P_GetCarCount=" + err);
            return;
        }
        cb(rows);
    });
}


var methods = {
    'getOrderByWarehouse': getOrderByWarehouse,
    'convertDocument':convertDocument,
    'getDocumentList':getDocumentList,
    'addLoadDocument':addLoadDocument,
    'getLoadList':getLoadList,
    'getDocumentByLoad':getDocumentByLoad,
    'getDocumentDetail':getDocumentDetail,
    'deleteDocumentFromLoad':deleteDocumentFromLoad,
    'setLoadCheckOut':setLoadCheckOut,
    'getReturnList':getReturnList,
    'getReturnDetail':getReturnDetail,
    'addReturn':addReturn,
    'getDocumentHeaderHist':getDocumentHeaderHist,
    'getDocumentDetailHist':getDocumentDetailHist,
    'createReturnDocument':createReturnDocument,
    'modifyDocument':modifyDocument,
    'getLoadForCheck':getLoadForCheck,
    'checkLoad':checkLoad,
    //==================客户端开始
    'addShoppingCar':addShoppingCar,
    'getCarGoods':getCarGoods,
    'getCarCount':getCarCount,
    'convertOrder':convertOrder

};
module.exports = methods;