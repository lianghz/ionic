var financeController = require('./../controllers/finance');
module.exports = function(app){
    financeController.Routes(app);
}