//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Finance = require('../models/finance');
var Common = require('../models/common');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/finance/record', this.record);
		app.get('/finance/payment', this.payment);
		app.get('/finance/cash', this.cash);

		//调用功能
		app.get('/finance/getOtherBankrollRecord', this.getOtherBankrollRecord);
		app.post('/finance/addOtherBankrollRecord', this.addOtherBankrollRecord);
		app.get('/finance/getPaymentHeader', this.getPaymentHeader);
		app.get('/finance/getPaymentDetail', this.getPaymentDetail);
		app.post('/finance/setPaymentStatus', this.setPaymentStatus);
		app.post('/finance/addCheckCashData', this.addCheckCashData);
		app.get('/finance/getCheckCashDetail', this.getCheckCashDetail);
		app.post('/finance/checkCashWithTransation', this.checkCashWithTransation);
		app.post('/finance/endCash', this.endCash);
		app.get('/finance/getMoneyType', this.getMoneyType);
	},

	getOtherBankrollRecord: function (req, res, next) {
		var recordId = req.query.recordId;
		var warehouseId = req.query.warehouseId;
		var accountId = req.query.accountId;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;

		var inParams = [recordId, warehouseId, accountId, startDate, endDate];
		Finance.getOtherBankrollRecord(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addOtherBankrollRecord: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var accountId = req.body.accountId;
		var recordTypeId = req.body.recordTypeId;
		var cashOrSavingSign = req.body.cashOrSavingSign;
		var recordTypeId2 = req.body.recordTypeId2;
		var referenceNO = req.body.referenceNO;
		var receiver = req.body.receiver;
		var payer = req.body.payer;
		var amount = req.body.amount;
		var remark = req.body.remark;
		var userName = req.userName;
		var inParams = [warehouseId, accountId, recordTypeId, cashOrSavingSign, recordTypeId2, referenceNO, receiver, payer, amount, remark, userName];
		Finance.addOtherBankrollRecord(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPaymentHeader: function (req, res, next) {
		var supplierId = req.query.supplierId;
		var warehouseId = req.query.warehouseId;
		var paymentId = req.query.paymentId;
		var status = req.query.status;
		var startDate = req.query.startDate;
		var endDate = req.query.endDate;

		var inParams = [supplierId, warehouseId, paymentId,status, startDate, endDate];
		Finance.getPaymentHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPaymentDetail: function (req, res, next) {
		var paymentId = req.query.paymentId;
		var inParams = [paymentId];
		Finance.getPaymentDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	setPaymentStatus: function (req, res, next) {
		var userName = req.userName;
		var paymentId = req.body.paymentId;
		var status = req.body.status;
		var warehouseId = req.body.warehouseId;
		var inParams = [userName,paymentId,status,warehouseId];
		Finance.setPaymentStatus(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addCheckCashData: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var totalCash = req.body.totalCash;
		var updateMethod = req.body.updateMethod;
		var userName = req.userName;
		var inParams = [warehouseId,totalCash,updateMethod,userName];
		Finance.addCheckCashData(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	getCheckCashDetail: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var inParams = [warehouseId];
		Finance.getCheckCashDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	checkCashWithTransation: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var userName = req.userName;
		var inParams = [warehouseId,userName];
		Finance.checkCashWithTransation(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	endCash: function (req, res, next) {
		var warehouseId = req.body.warehouseId;
		var userName = req.userName;
		var method  = req.body.method;
		var inParams = [warehouseId,userName,method];
		Finance.endCash(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	//=====================客户端
	getMoneyType: function (req, res, next) {
		var inParams = [];
		Finance.getMoneyType(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	///页面模板
	record: function (req, res, next) {
		res.render('finance/OtherRecordSetting', { layout: null });
	},
	payment: function (req, res, next) {
		res.render('finance/PaymentSetting', { layout: null });
	},
	cash: function (req, res, next) {
		res.render('finance/CashSetting', { layout: null });
	},
};