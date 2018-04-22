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

var methods = {
    'getBrand': getBrand
};
module.exports = methods;