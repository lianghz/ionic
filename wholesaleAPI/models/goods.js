var db = require('./mysqlDal');


//品牌管理

function getNavigation(inParams,cb) {
    var sql = 'CALL P_GetNavigation()';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("ERR P_GetNavigation=" + err);
            return;
        }
        cb(rows);
    });
}

function getGoodsInfoPage(inParams,cb) {
    var sql = 'CALL P_GetGoodsInfoPage(?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("ERR P_GetGoodsInfoPage=" + err);
            return;
        }
        cb(rows);
    });
}


function getWebGoodsInfo(inParams,cb) {
    var sql = 'CALL P_GetWebGoodsInfo(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err modify goods=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'getNavigation': getNavigation,
    'getGoodsInfoPage':getGoodsInfoPage,
    'getWebGoodsInfo':getWebGoodsInfo
};
module.exports = methods;