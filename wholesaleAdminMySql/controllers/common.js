var Common = require('../models/common');
module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/common/UserWarehouse', this.getUserWarehouse);
		app.get('/common/warehouse', this.getWarehouse);
		app.get('/common/promotiontype', this.getPromotionType);
		app.get('/common/moneytype', this.getMoneyType);
		app.get('/common/getAdjust', this.getAdjust);
		app.get('/common/getSettleDate', this.getSettleDate);
		app.get('/common/getSupplier', this.getSupplier);
		app.get('/common/getRecordType', this.getRecordType);
		app.get('/common/getAccounter', this.getAccounter);
		app.get('/common/getWarehouseLock', this.getWarehouseLock);
		app.post('/common/setWarehouseLock', this.setWarehouseLock);

		//调用功能
		app.get('/common/getCashLock', this.getCashLock);
		app.post('/common/setCashLock', this.setCashLock);
	},

	getUserWarehouse: function (req, res, next) {
		console.log('req.userName='+req.userName)
		var itemType = 12;
		var filter1 = req.userName;
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},


	getWarehouse: function (req, res, next) {
		var itemType = 21;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getSupplier: function (req, res, next) {
		var itemType = 3;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getMoneyType: function (req, res, next) {
		var itemType = 4;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getPromotionType: function (req, res, next) {
		var itemType = 31;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getAdjust: function (req, res, next) {
		var itemType = 5;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getRecordType: function (req, res, next) {
		var itemType = 19;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},
	//==================================

	getSettleDate: function (req, res, next) {
		var itemType = 11;
		var filter1 = "";
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getAccounter: function (req, res, next) {
		var itemType = 20;
		var filter1 = req.query.warehouseId;
		var filter2 = "";
		var inParams2 = [itemType, filter1, filter2];
		Common.getItemData(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getWarehouseLock: function (req, res, next) {
		var functionId  = 1;
		var warehouseId = req.query.warehouseId;
		var inParams = [functionId, warehouseId];
		Common.getFunctionCtroll(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getCashLock: function (req, res, next) {
		var functionId  = 2;
		var warehouseId = req.query.warehouseId;
		var inParams = [functionId, warehouseId];
		Common.getFunctionCtroll(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	setWarehouseLock: function (req, res, next) {
		var functionId  = 1;
		var lockStatus = req.body.lockStatus;
		var warehouseId = req.body.warehouseId;
		var inParams = [functionId,lockStatus, warehouseId];
		Common.setFunctionCtroll(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	setCashLock: function (req, res, next) {
		var functionId  = 2;
		var lockStatus = req.body.lockStatus;
		var warehouseId = req.body.warehouseId;
		var inParams = [functionId,lockStatus, warehouseId];
		Common.setFunctionCtroll(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

}