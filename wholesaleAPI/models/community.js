var db = require('./mysqlDal');


function getAdvertList(inParams,cb) {
    var sql = 'CALL P_GetAdvertList(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

function modifyAdvert(inParams,cb) {
    var sql = 'CALL P_ModifyAdvert(?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}



var methods = {
    'getAdvertList': getAdvertList,
    'modifyAdvert':modifyAdvert
};
module.exports = methods;