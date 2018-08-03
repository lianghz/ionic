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
    var sql = 'CALL P_GetGoods(?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function getGoodsName(inParams,cb) {
    var sql = 'CALL P_GetGoodsName(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function modifyGoods(inParams,cb) {
    var sql = 'CALL P_ModifyGoods(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err modify goods=" + err);
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

function modifyWebPromotion(inParams,cb) {
    var sql = 'CALL P_ModifyWebPromotion(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
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

function getCategoryBySon(inParams,cb) {
    var sql = 'CALL P_GetCategoryBySon(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function getCategoryTree(inParams,cb) {
    var sql = 'CALL P_GetCategoryTree(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function addCategory(inParams,cb) {
    var sql = 'CALL P_AddCategory(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function modifyCategory(inParams,cb) {
    var sql = 'CALL P_ModifyCategroy(?,?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
///产品组管理
function getGoodsGroup(inParams,cb) {
    var sql = 'CALL P_GetGoodsGroup(?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function getGoodsGroupDetails(inParams,cb) {
    var sql = 'CALL P_GetGoodsGroupDetails(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function addGoodsGroup(inParams,cb) {
    var sql = 'CALL P_AddGoodsGroup(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function addGoodsGroupDetails(inParams,cb) {
    var sql = 'CALL P_AddGoodsGroupDetails(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function deleteGroupGoods(inParams,cb) {
    var sql = 'CALL P_DeleteGroupGood(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}
function modifyGoodsGroup(inParams,cb) {
    var sql = 'CALL P_ModifyGoodsGroup(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}




//转包装管理
function getPackageRule(inParams,cb){
    var sql = 'CALL P_GetPackageRule(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function getPackageRuleDestinationDetail(inParams,cb){
    var sql = 'CALL P_GetPackageRuleDestinationDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function getPackageRuleOringinDetail(inParams,cb){
    var sql = 'CALL P_GetPackageRuleOringinDetail(?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function addPackageChangeRuleHeader(inParams,cb){
    var sql = 'CALL P_AddPackageChangeRuleHeader(?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function addPackageRuleDestinationDetail(inParams,cb){
    var sql = 'CALL P_AddPackageRuleDestinationDetail(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function addPackageRuleOringinDetail(inParams,cb){
    var sql = 'CALL P_AddPackageRuleOringinDetail(?,?,?,?)';
    db.query(sql, inParams, function (err, rows, fields) {
        if (err) {  
            console.log("err get goods=" + err);
            return;
        }
        cb(rows);
    });
}

function modifyPackageChangeRuleHeader(inParams,cb){
    var sql = 'CALL P_ModifyPackageChangeRuleHeader(?,?,?,?)';
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
    'getGoodsName':getGoodsName,
    'modifyGoods':modifyGoods,
    'getCategoryByFather':getCategoryByFather,
    'getCategoryBySon':getCategoryBySon,
    'getCategoryTree':getCategoryTree,
    'addCategory':addCategory,
    'modifyCategory':modifyCategory,
    'getGoodsGroup':getGoodsGroup,
    'getGoodsGroupDetails':getGoodsGroupDetails,
    'addGoodsGroup':addGoodsGroup,
    'addGoodsGroupDetails':addGoodsGroupDetails,
    'deleteGroupGoods':deleteGroupGoods,
    'modifyGoodsGroup':modifyGoodsGroup,
    'getPackageRule':getPackageRule,
    'getPackageRuleOringinDetail':getPackageRuleOringinDetail,
    'getPackageRuleDestinationDetail':getPackageRuleDestinationDetail,
    'addPackageChangeRuleHeader':addPackageChangeRuleHeader,
    'addPackageRuleDestinationDetail':addPackageRuleDestinationDetail,
    'addPackageRuleOringinDetail':addPackageRuleOringinDetail,
    'modifyPackageChangeRuleHeader':modifyPackageChangeRuleHeader,
    'getWebGoodsInfo':getWebGoodsInfo,
    'modifyWebPromotion':modifyWebPromotion
};
module.exports = methods;