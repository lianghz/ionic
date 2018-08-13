var customer = require('../models/customer');
module.exports = {
	Routes: function (app) {
		//调用模板
		app.post('/customer/addAddress', this.addAddress);
		app.get('/customer/getAddress', this.getAddress);
		app.get('/customer/getDefaultAddress', this.getDefaultAddress);

	},
	addAddress: function (req, res, next) {
		var customerId = req.body.customerId;
		var regionId1 =req.body.regionId1;
		var regionId2 =req.body.regionId2;
		var regionId3 =req.body.regionId3;
		var regionId4 =req.body.regionId4;
		var regionId5 =req.body.regionId5;
		var address  =req.body.address;
		var phone  =req.body.phone;
		var linkMan  =req.body.linkMan;
		var addressId = req.body.addressId;
		var isDefault = req.body.isDefault;
		customerId = customerId?customerId:'lhz';
		regionId1 = regionId1?regionId1:0;
		regionId2 = regionId2?regionId2:0;
		regionId3 = regionId3?regionId3:0;
		regionId4 = regionId4?regionId4:0;
		regionId5 = regionId5?regionId5:0;
		addressId = addressId||0;
		isDefault = isDefault||0;
		

		var inParams = [customerId, regionId1, regionId2,regionId3,regionId4,regionId5,address,phone,linkMan,addressId,isDefault];
		
		customer.addAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},


	getAddress: function (req, res, next) {
		var customerId = req.session.userName;
		customerId = customerId?customerId:'lhz';
		var inParams = [customerId];
		customer.getAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDefaultAddress: function (req, res, next) {
		var customerId = req.session.userName;
		customerId = customerId?customerId:'lhz';
		var inParams = [customerId];
		customer.getDefaultAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

}