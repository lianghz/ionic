var Document = require('../models/document');
module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/document/order', this.order);
		app.get('/document/document', this.document);
		app.get('/document/load', this.load);
		app.get('/document/return', this.return);
		app.get('/document/returndoc', this.returnDoc);

		//调用功能
		app.get('/document/getOrderByWarehouse', this.getOrderByWarehouse);
		app.post('/document/convertDocument', this.convertDocument);
		app.get('/document/getDocument', this.getDocumentList);
		app.post('/document/addLoadDocument', this.addLoadDocument);
		app.get('/document/getLoadList', this.getLoadList);
		app.get('/document/getDocumentByLoad', this.getDocumentByLoad);
		app.get('/document/getDocumentDetail', this.getDocumentDetail);
		app.post('/document/deleteDocumentFromLoad', this.deleteDocumentFromLoad);
		app.post('/document/setLoadCheckOut', this.setLoadCheckOut);
		app.get('/document/getReturnList', this.getReturnList);
		app.get('/document/getReturnDetail', this.getReturnDetail);
		app.post('/document/addReturn', this.addReturn);
		app.get('/document/getDocumentHeaderHist', this.getDocumentHeaderHist);
		app.get('/document/getDocumentDetailHist', this.getDocumentDetailHist);
		app.post('/document/createReturnDocument', this.createReturnDocument);
		app.post('/document/modifyDocument', this.modifyDocument);
		app.get('/document/getLoadForCheck', this.getLoadForCheck);
		app.post('/document/checkLoad', this.checkLoad);
	},

	getOrderByWarehouse: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var status = 0;//req.query.status;
		var valid = 1;//req.query.valid;
		var startDate = '2000-1-1';//req.query.startDate;
		var endDate = '9999-12-30';//req.query.endDate;
		var inParams = [warehouseId, status, valid, startDate, endDate];
		Document.getOrderByWarehouse(inParams, function (rows) {
			res.json(rows);
		});
	},


	convertDocument: function (req, res, next) {
		var userName = req.userName;
		var warehouseId = req.body.warehouseId;
		var customerId = req.body.customerId;
		customerId = customerId ? customerId : '';
		var inParams = [userName, warehouseId, customerId];
		Document.convertDocument(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDocumentList: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var startDate = req.query.startDate;//req.query.startDate;
		var endDate = req.query.endDate;//req.query.endDate;
		var inParams = [warehouseId, startDate, endDate];
		Document.getDocumentList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addLoadDocument: function (req, res, next) {
		var deliveryManId = req.body.deliveryManId;
		var userName = req.userName;
		var docs = req.body.docs;
		var warehouseId = req.body.warehouseId;
		var inParams = [deliveryManId, userName, docs, warehouseId];
		Document.addLoadDocument(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getLoadList: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var confirm = req.query.confirm;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;
		var inParams = [warehouseId, confirm, startDate, endDate];
		Document.getLoadList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDocumentByLoad: function (req, res, next) {
		var loadId = req.query.loadId;
		var inParams = [loadId];
		Document.getDocumentByLoad(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getDocumentDetail: function (req, res, next) {
		var documentId = req.query.documentId;
		var inParams = [documentId];
		Document.getDocumentDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	deleteDocumentFromLoad: function (req, res, next) {
		var userName = req.userName;
		var documentId = req.body.documentId;
		var loadId = req.body.loadId;
		var inParams = [userName, documentId, loadId];
		Document.deleteDocumentFromLoad(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	setLoadCheckOut: function (req, res, next) {
		var loadId = req.body.loadId;
		var userName = req.userName;
		var inParams = [loadId, userName];
		Document.setLoadCheckOut(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getReturnList: function (req, res, next) {
		var returnId = req.query.returnId;
		var loadId = req.query.loadId;
		var warehouseId = req.query.warehouseId;
		var staffId = req.query.staffId;
		var balanceStatus = req.query.balanceStatus;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;

		var inParams = [returnId, loadId, warehouseId, staffId, balanceStatus, startDate, endDate];
		Document.getReturnList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getReturnDetail: function (req, res, next) {
		var returnId = req.query.returnId;
		var inParams = [returnId];
		Document.getReturnDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addReturn: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var loadId = req.body.loadId;
		var goodsId = req.body.goodsId;
		var cases = req.body.cases;
		var piece = req.body.piece;
		var realDeliveryManId = req.body.realDeliveryManId;
		var userName = req.userName;
		var checkInDate = req.body.checkInDate;
		var inParams = [warehouseId, loadId, goodsId, cases, piece, realDeliveryManId, userName, checkInDate];
		Document.addReturn(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDocumentHeaderHist: function (req, res, next) {
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;
		var warehouseId = req.query.warehouseId;
		var documentId = req.query.documentId;
		var loadId = req.query.loadId;
		var inParams = [startDate, endDate, warehouseId, documentId, loadId];
		Document.getDocumentHeaderHist(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDocumentDetailHist: function (req, res, next) {
		var documentId = req.query.documentId;
		var inParams = [documentId];
		Document.getDocumentDetailHist(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	createReturnDocument: function (req, res, next) {
		var documentId = req.body.documentId;
		var goodsIds = req.body.goodsIds;
		var quantitys = req.body.quantitys;
		var userName = req.userName;
		var inParams = [documentId, goodsIds, quantitys, userName];
		Document.createReturnDocument(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifyDocument: function (req, res, next) {
		var goodsId = req.body.goodsId;
		var documentId = req.body.documentId;
		var userName = req.userName;
		var piece = req.body.piece;
		var inParams = [goodsId, documentId, userName, piece];
		Document.modifyDocument(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getLoadForCheck: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var status = req.query.status;
		var loadId = req.query.loadId;
		var inParams = [warehouseId, status, loadId];
		Document.getLoadForCheck(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	checkLoad: function (req, res, next) {
		var loadId = req.body.loadId;
		var userName = req.userName;
		var inParams = [loadId, userName];
		Document.checkLoad(inParams, function (rows) {
			res.json(rows);
		});
	},

	///页面模板
	order: function (req, res, next) {
		res.render('document/OrderSetting', { layout: null });
	},
	document: function (req, res, next) {
		res.render('document/DocumentSetting', { layout: null });
	},
	load: function (req, res, next) {
		res.render('document/LoadSetting', { layout: null });
	},
	return: function (req, res, next) {
		res.render('document/returnSetting', { layout: null });
	},
	returnDoc: function (req, res, next) {
		res.render('document/returnDocSetting', { layout: null });
	},
}