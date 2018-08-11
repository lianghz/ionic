var db = require('./mysqlDal');
//
function addAddress(inParams,cb) {
    var sql = 'CALL P_AddAddress(?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("errrrrrr=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'addAddress': addAddress,
};
module.exports = methods;