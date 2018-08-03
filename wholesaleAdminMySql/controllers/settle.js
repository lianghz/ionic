var Settle = require('../models/settle');
module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/settle/docmod', this.docmod);
		app.get('/settle/receive', this.receive);
		app.get('/settle/check', this.check);
		app.get('/settle/settle', this.settle);

		//调用功能
		app.get('/settle/getReceiveHeader', this.getReceiveHeader);
		app.post('/settle/modifyReceive', this.modifyReceive);
		app.get('/settle/getReceive', this.getReceive);
		app.get('/settle/getReceiveDetail', this.getReceiveDetail);
		app.post('/settle/setReceiveHeaderStatus', this.setReceiveHeaderStatus);
		app.post('/settle/backupSettlementedData', this.backupSettlementedData);
		
	},

	getReceiveHeader: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var checkOutDate = req.query.checkOutDate;
		var loadId = req.query.loadId;
		var receiveId = req.query.receiveId;
		var inParams = [warehouseId, checkOutDate, loadId, receiveId];
		Settle.getReceiveHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},


	modifyReceive: function (req, res, next) {
		var loadId = req.body.loadId;
		var realDeliveryManId = req.body.realDeliveryManId;
		var userName = req.session.userName;
		var monneyType = req.body.monneyType;
		var amount = req.body.amount;
		var inParams = [loadId, realDeliveryManId, userName,monneyType,amount];
		Settle.modifyReceive(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getReceive: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var checkOutDate = req.query.checkOutDate;
		var loadId = req.query.loadId;
		var receiveId = req.query.receiveId;
		var inParams = [warehouseId, checkOutDate, loadId, receiveId];
		Settle.getReceive(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getReceiveDetail: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var checkOutDate = req.query.checkOutDate;
		var loadId = req.query.loadId;
		var receiveId = req.query.receiveId;
		var inParams = [warehouseId, checkOutDate, loadId, receiveId];
		Settle.getReceiveDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	setReceiveHeaderStatus: function (req, res, next) {
		var userName = req.session.userName;
		var receiveId = req.body.receiveId;
		var status = req.body.status;
		var warehouseId = req.body.warehouseId;
		var inParams = [userName, receiveId, status, warehouseId];
		Settle.setReceiveHeaderStatus(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	backupSettlementedData: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var settlementDate =  req.body.settlementDate;
		var userName = req.session.userName;
		var inParams = [warehouseId, settlementDate, userName];
		Settle.backupSettlementedData(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	

	///页面模板
	receive: function (req, res, next) {
		res.render('settle/ReceiveSetting', { layout: null });
	},
	docmod:function (req, res, next) {
		res.render('settle/DocModSetting', { layout: null });
	},
	check:function (req, res, next) {
		res.render('settle/CheckSetting', { layout: null });
	},
	settle:function (req, res, next) {
		res.render('settle/SettleSetting', { layout: null });
	},
	
}