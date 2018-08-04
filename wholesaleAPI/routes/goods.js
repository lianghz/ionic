var goodsController = require('./../controllers/goods');
module.exports = function(app){
    goodsController.Routes(app);
}