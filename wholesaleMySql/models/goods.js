var db = require('./mysqlDal');

//品牌管理
function getBrand(inParams,cb) {
    var sql = 'CALL P_GetBrand(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        console.log("SELECT ==> ");
        // console.log(rows[0].length);
        // for (var i in rows) {
        //     console.log(rows[i]);
        // }
        cb(rows);
    });
}

function addBrand(inParams,cb) {
    var sql = 'CALL P_AddBrand(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err add brand=" + err);
            return;
        }
        console.log("SELECT add brand ==> ");
        console.log(rows[0].length);
        for (var i in rows) {
            console.log(rows[i]);
        }
        cb(rows);
    });
}

function modifyBrand(inParams,cb) {
    var sql = 'CALL P_ModifyBrand(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err modify brand=" + err);
            return;
        }
        cb(rows);
    });
}

//产品管理
function addGoods(inParams,cb) {
    var sql = 'CALL P_AddGoods(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err add goods=" + err);
            return;
        }
        cb(rows);
    });
}

function getGoods(inParams,cb) {
    var sql = 'CALL P_GetGoods(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function modifyGoods(inParams,cb) {
    var sql = 'CALL P_ModifyGoods(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err modify goods=" + err);
            return;
        }
        cb(rows);
    });
}

//类别管理
function getCategoryByFather(inParams,cb) {
    var sql = 'CALL P_GetCategoryByFather(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}


var methods = {
    'getBrand': getBrand,
    'addBrand':addBrand,
    'modifyBrand':modifyBrand,
    'addGoods':addGoods,
    'getGoods':getGoods,
    'modifyGoods':modifyGoods,
    'getCategoryByFather':getCategoryByFather,
};
module.exports = methods;