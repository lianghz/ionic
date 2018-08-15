var Document = require('../models/document');
var moment = require('moment');
module.exports = {

	Routes: function (app) {

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
		//==================================
		app.get('/document/getCarGoods', this.getCarGoods);
		app.post('/document/addShoppingCar', this.addShoppingCar);
		app.get('/document/getCarCount', this.getCarCount);
		app.post('/document/convertOrder', this.convertOrder);
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
		var userName = req.session.userName;
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
		var userName = req.session.userName;
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
		var userName = req.session.userName;
		var documentId = req.body.documentId;
		var loadId = req.body.loadId;
		var inParams = [userName, documentId, loadId];
		Document.deleteDocumentFromLoad(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	setLoadCheckOut: function (req, res, next) {
		var loadId = req.body.loadId;
		var userName = req.session.userName;
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
		var userName = req.session.userName;
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
		var userName = req.session.userName;
		var inParams = [documentId, goodsIds, quantitys, userName];
		Document.createReturnDocument(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifyDocument: function (req, res, next) {
		var goodsId = req.body.goodsId;
		var documentId = req.body.documentId;
		var userName = req.session.userName;
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
		var userName = req.session.userName;
		var inParams = [loadId, userName];
		Document.checkLoad(inParams, function (rows) {
			res.json(rows);
		});
	},

	//======================客户端
	addShoppingCar: function (req, res, next) {
		str = "";
		console.log('body=' + JSON.stringify(req.body));
		var addType = req.body.addType;
		var customerId = req.session.userName;
		var goodsId = req.body.goodsId;
		var cases = req.body.cases;
		var piece = req.body.piece;
		var levelId = req.body.levelId;
		var warehouseId = req.body.warehouseId;
		customerId = customerId ? customerId : 'lhz';
		levelId = levelId ? levelId : 0;
		warehouseId = warehouseId ? warehouseId : 1;


		var inParams = [addType, customerId, goodsId, cases, piece, levelId, warehouseId];
		Document.addShoppingCar(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getCarGoods: function (req, res, next) {
		var customerId = req.session.userName;
		customerId = customerId ? customerId : 'lhz';
		var inParams = [customerId];
		Document.getCarGoods(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getCarCount: function (req, res, next) {
		var customerId = req.session.userName;
		customerId = customerId ? customerId : 'lhz';
		var inParams = [customerId];
		Document.getCarCount(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	convertOrder: function (req, res, next) {
		var customerId = req.session.userName;
		var warehouseId = req.body.warehouseId;
		var levelId = req.body.warehouseId;
		var paidWay = req.body.paidWay;
		var deliverStartDateTime = req.body.deliverStartDateTime;
		var deliverEndDateTime = req.body.deliverEndDateTime;
		var deliveryAddress = req.body.deliveryAddress;
		var mobile = req.body.mobile;
		var linkman = req.body.linkman;
		var remark = req.body.remark;
		var method = req.body.method;
		var regionId = req.body.regionId;
		var orderType = req.body.orderType;
		var userId = req.body.orderType;

		customerId = customerId ? customerId : 'lhz';
		levelId = levelId ? levelId : 0;
		paidWay = paidWay ? paidWay : 0;
		orderType = orderType ? orderType : 5;
		userId = userId ? userId : 'sys';
		deliverStartDateTime = deliverStartDateTime || moment().format("YYYY-MM-DD HH:mm:ss");
		deliverEndDateTime = deliverEndDateTime || moment().format("YYYY-MM-DD HH:mm:ss");
		console.log("Date.now()="+moment().format("YYYY-MM-DD HH:mm:ss"));
		var inParams = [customerId, warehouseId, levelId, paidWay, deliverStartDateTime, deliverEndDateTime, deliveryAddress, mobile, linkman, remark, method, regionId, orderType,userId];
		Document.convertOrder(inParams, function (rows) {
			res.json(rows[0]);
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