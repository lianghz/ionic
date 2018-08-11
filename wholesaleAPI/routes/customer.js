var customeController = require('./../controllers/customer');
module.exports = function(app){
    customeController.Routes(app);
}