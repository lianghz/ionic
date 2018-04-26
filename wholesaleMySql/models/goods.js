var db = require('./mysqlDal');
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
            console.log("err add brand=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'getBrand': getBrand,
    'addBrand':addBrand,
    'modifyBrand':modifyBrand
};
module.exports = methods;