var community = require('../models/community');
var Images = require('../models/uploadImg')
var formidable = require('formidable');
module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/community/advert', this.advert);

		//调用功能
		app.get('/community/getAdvert', this.getAdvertList);
		app.post('/community/modifyAdvert', this.modifyAdvert);

	},

	getAdvertList: function (req, res, next) {
		var warehouseId = req.query.warehouseId;
		var status = req.query.status;
		var date1 = req.query.stDate;
		var date2 = req.query.endDate;
		var inParams = [warehouseId, status, date1, date2];
		community.getAdvertList(inParams, function (rows) {
			res.json(rows[0]);
		});
	},


	modifyAdvert: function (req, res, next) {

		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var filepath = files.filename.path;
			var filename = files.filename.name;
			var now = new Date();
			var imageName = "";
			if (filename != "") {
				imageName = "ad" + now.getFullYear() + now.getMonth() + now.getDate() + now.getTime() + now.getMilliseconds() + ".jpg";
			}

			var advertId = fields.advertId;
			var warehouseId = fields.warehouseId;
			var status = fields.status;
			var effectFrom = fields.effectFrom;
			var effectTo = fields.effectTo;
			var title = fields.title;
			var descript = fields.descript;
			var sortId = fields.sortId;
			var user = req.userName;
			// var imageName = fields.imageName;
			var urlAddr = fields.urlAddr;
			if (filename != "") Images.uploadImgOsize(filepath, imageName);
			var inParams = [advertId, warehouseId, status, effectFrom, effectTo, title, descript, sortId, user, imageName, urlAddr];
			community.modifyAdvert(inParams, function (rows) {
				res.json(rows[0]);
			});
		})


	},

	///页面模板
	advert: function (req, res, next) {
		res.render('community/AdvertSetting', { layout: null });
	},
}