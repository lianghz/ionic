var customer = require('../models/customer');
module.exports = {
    Routes: function (app) {
		//调用模板
		app.post('/customer/addAddress', this.addAddress);

    },
    getUserWarehouse: function (req, res, next) {
		var itemType = 12;
		var filter1 = req.session.userName;
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		customer.addAddress(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

}