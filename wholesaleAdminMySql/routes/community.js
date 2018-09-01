var communityController = require('../controllers/community');
module.exports = function(app){
    communityController.Routes(app);
}