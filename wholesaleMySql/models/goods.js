var db = require('./mysqlDal');
function getBrand() {
    var inParams = [-1, "", "", 1]
    var sql = 'CALL P_GetBrand(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('用户数量 : ', rows[0].count);
    });
}

var methods = { 
    'getBrand': getBrand
};
module.exports = methods;