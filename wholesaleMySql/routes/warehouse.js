var warehouseController = require('./../controllers/warehouse');
module.exports = function(app){
    warehouseController.Routes(app);
}