var db = require('./mysqlDal');
//
function modfiyCustomerToken(inParams,cb) {
    var sql = 'CALL P_ModfiyCustomerToken(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("P_ModfiyCustomerToken=" + err);
            return;
        }
        cb(rows);
    });
}

var methods = {
    'modfiyCustomerToken': modfiyCustomerToken,
};
module.exports = methods;