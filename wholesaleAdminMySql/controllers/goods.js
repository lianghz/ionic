//控制器负责处理用户交互，并根据用户交互选择恰当的视图来显示。听起来是不是很像请
//求路由？实际上，控制器和路由器之间唯一的区别是控制器一般会把相关功能归组。

var Goods = require('../models/goods');
var Images = require('../models/uploadImg')
var formidable = require('formidable');
var fs = require('fs');

// var customerViewModel = require('../viewModels/customer.js');

module.exports = {

	Routes: function (app) {
		//调用模板
		app.get('/goods/brand', this.brand);
		app.get('/goods/goods', this.goods);
		app.get('/goods/categroy', this.categroy);
		app.get('/goods/group', this.group);
		app.get('/goods/package', this.package);
		app.get('/goods/promgoods',this.promotionGoods);

		//调用功能
		app.get('/goods/getbrand', this.getBrand);
		app.post('/goods/addbrand', this.addBrand);
		app.post('/goods/modifybrand', this.modifyBrand);

		app.get('/goods/getcatebf', this.getCategoryByFather);
		app.get('/goods/getcatebs', this.getCategoryBySon);
		app.post('/goods/getcatetree', this.getCategoryTree);
		app.post('/goods/addcate', this.addCategory);
		app.post('/goods/editcate', this.modifyCategory);

		app.get('/goods/getgoods', this.getGoods);
		app.post('/goods/addgoods', this.addGoods);
		app.post('/goods/editgoods', this.modifyGoods);
		app.get('/goods/getwebgoods', this.getWebGoodsInfo);
		app.post('/goods/modwebpromo', this.modifyWebPromotion);
		


		app.get('/goods/getgroup', this.getGroup);
		app.get('/goods/getgroupdetail', this.getGroupDetail);
		app.post('/goods/addgroup', this.addGroup);
		app.post('/goods/addgroupdetail', this.addGroupDetail);
		app.post('/goods/editgroup', this.modifyGroup);
		app.post('/goods/delgroupgoods', this.delGroupGoods);

		app.get('/goods/getpackagerule', this.getPackageRule);
		app.get('/goods/getpackageodetail', this.getPackageRuleOringinDetail);
		app.get('/goods/getpackageddetail', this.getPackageRuleDestinationDetail);
		app.post('/goods/addpackagerule', this.addPackageChangeRuleHeader);
		app.post('/goods/addpackageodetail', this.addPackageRuleOringinDetail);
		app.post('/goods/addpackageddetail', this.addPackageRuleDestinationDetail);
		app.post('/goods/editpackageddetail', this.addPackageRuleDestinationDetail);
		app.post('/goods/modifypackagerule', this.modifyPackageChangeRuleHeader);




	},

	addBrand: function (req, res, next) {
		var userName = req.userName;
		var inParams2 = [req.body.name, req.body.company, userName];
		Goods.addBrand(inParams2, function (rows) {
			res.json(rows[0]);
		});
	},

	getBrand: function (req, res, next) {

		var name = req.query.name ? req.query.name : "";
		var company = req.query.company ? req.query.company : "";
		var status = req.query.status ? req.query.status : "";
		var inParams = [-1, name, company, status]
		Goods.getBrand(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyBrand: function (req, res, next) {
		var userName = req.userName;
		var inParams = [req.body.brandId, req.body.name, req.body.company, req.body.status, userName]
		Goods.modifyBrand(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addGoods: function (req, res, next) {
		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			// if (err) return res.redirect(303, '/error');
			var filepath = files.filename.path;
			var now = new Date();
			var imageName = "s" + now.getFullYear() + now.getMonth() + now.getDate() + now.getTime() + now.getMilliseconds() + ".jpg";
			var userName = req.userName;

			var goodsId = fields.barCode
			var name = fields.name;
			var barCode = goodsId;
			var categoryId = fields.categoryId;
			var brandId = fields.brandId;
			var subunit = fields.subunit;
			var weight = fields.weight;
			var length = fields.length;
			var width = fields.width;
			var height = fields.height;
			var volume = fields.volume;
			var description = fields.description;
			var imageId = imageName;
			var usefullLife = fields.usefullLife;
			var miniLife = fields.miniLife;
			var createUser = userName;
			var updateUser = userName;
			var inParams = [goodsId, name, barCode, categoryId, brandId, subunit, weight, length, width, height, volume, description, imageId, usefullLife, miniLife, createUser, updateUser];
			Images.uploadImg(filepath, imageName);
			Goods.addGoods(inParams, function (rows) {
				res.json(rows[0]);
			});
		});

	},

	getGoods: function (req, res, next) {
		var goodsId = req.query.goodsId;
		var name = req.query.name;
		var barCode = req.query.barCode;
		var categoryId = req.query.categoryId;
		var brandId = req.query.brandId;
		var status = req.query.status;
		if (goodsId == "") goodsId = 0;
		if (categoryId == "") categoryId = 0;
		if (brandId == "") brandId = 0;

		var inParams = [goodsId, name, barCode, categoryId, brandId, status]
		console.log("getgoods=" + req.query.goodsId);
		Goods.getGoods(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyGoods: function (req, res, next) {

		var form = new formidable.IncomingForm();
		form.parse(req, function (err, fields, files) {
			var filepath = files.filename.path;
			var filename = files.filename.name;
			var now = new Date();
			if (filename != "") {
				var imageName = "s" + now.getFullYear() + now.getMonth() + now.getDate() + now.getTime() + now.getMilliseconds() + ".jpg";
			}
			var userName = req.userName;

			var goodsId = fields.barCode
			var name = fields.name;
			var barCode = goodsId;
			var categoryId = fields.categoryId;
			var brandId = fields.brandId;
			var subunit = fields.subunit;
			var weight = fields.weight;
			var length = fields.length;
			var width = fields.width;
			var height = fields.height;
			var volume = fields.volume;
			var description = fields.description;
			var imageId = imageName;
			var usefullLife = fields.usefullLife;
			var miniLife = fields.miniLife;
			var updateUser = userName;
			var status = fields.status;
			var inParams = [goodsId, name, barCode, categoryId, brandId, subunit, weight, length, width, height, volume, description, imageId, usefullLife, miniLife, updateUser, status];
			if (filename != "") Images.uploadImg(filepath, imageName);
			Goods.modifyGoods(inParams, function (rows) {
				res.json(rows[0]);
			});
		})
	},

	getWebGoodsInfo: function (req, res, next) {
		var levelId = req.query.levelId;
		var warehouseId = req.query.warehouseId;
		var promotionType = req.query.promotionType;
		if (levelId == "") levelId = 0;
		if (warehouseId == "") warehouseId = 0;
		if (promotionType == "") promotionType = 0;

		var inParams = [levelId, warehouseId, promotionType];
		Goods.getWebGoodsInfo(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	modifyWebPromotion: function (req, res, next) {
		var userName = req.userName;
		var warehouseId = req.body.warehouseId;
		var promotionType = req.body.promotionType;
		var goodsId = req.body.goodsId;
		var modType = req.body.modType;//1添加，2删除

		var inParams = [userName, warehouseId, goodsId,promotionType, modType]
		console.log("getgoods=" + req.query.goodsId);
		Goods.modifyWebPromotion(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	/// categories 类别
	getCategoryByFatherSon: function (req, res, next) {
		var id = req.query.id;
		var catety = req.query.catety;
		catety = catety ? catety : 0;
		id = id ? id : 0
		var inParams = [id];
		if (catety == 1) {
			Goods.getCategoryBySon(inParams, function (rows) {
				res.json(rows[0]);
			});
		} else {

			Goods.getCategoryByFather(inParams, function (rows) {
				res.json(rows[0]);
			});
		}
		console.log("P_GetCategoryByFather=" + id);

	},

	getCategoryByFather: function (req, res, next) {
		var fartherId = req.query.fartherId;
		// if (fartherId == "" || fartherId==null) fartherId = 0;
		fartherId = fartherId ? fartherId : 0
		var inParams = [fartherId];
		console.log("P_GetCategoryByFather=" + fartherId);
		Goods.getCategoryByFather(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getCategoryBySon: function (req, res, next) {
		var sonId = req.query.sonId;
		fartherId = fartherId ? fartherId : 0
		var inParams = [sonId];
		Goods.getCategoryBySon(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getCategoryTree: function (req, res, next) {
		var id = req.body.id;
		var status = req.body.status;
		id = id ? id : -1;
		status = status ? status : -1;
		var inParams = [id, status];
		Goods.getCategoryTree(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addCategory: function (req, res, next) {
		var description = req.body.name;
		var userName = req.userName;
		var fid = req.body.fid;
		var inParams = [description, userName, fid];
		Goods.addCategory(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifyCategory: function (req, res, next) {
		var id = req.body.id;
		var fid = req.body.fid;
		var description = req.body.name;
		var userName = req.userName;
		var status = req.body.status;
		id = id ? id : -1;
		status = status ? status : -1;
		var inParams = [id, fid, description, userName, status];
		Goods.modifyCategory(inParams, function (rows) {
			res.json(rows[0]);
		});
	},



	//商品组
	getGroup: function (req, res, next) {
		var groupId = req.query.groupId;
		var description = req.query.name;
		var status = req.query.status;
		groupId = groupId ? groupId : -1;
		description = description ? description : "";
		status = status ? status : -1;
		var inParams = [groupId, description, status];
		Goods.getGoodsGroup(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addGroup: function (req, res, next) {
		var groupId = req.body.groupId;
		var description = req.body.name;
		var userName = req.userName;
		var inParams = [description, userName];
		Goods.addGoodsGroup(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getGroupDetail: function (req, res, next) {
		var groupId = req.query.groupId;
		var inParams = [groupId];
		Goods.getGoodsGroupDetails(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addGroupDetail: function (req, res, next) {
		var groupId = req.body.groupId;
		var goodsIds = req.body.goodsIds;
		var inParams = [groupId, goodsIds];
		Goods.addGoodsGroupDetails(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	delGroupGoods: function (req, res, next) {
		var groupId = req.body.groupId;
		var goodsId = req.body.goodsId;
		var inParams = [groupId, goodsId];
		Goods.deleteGroupGoods(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifyGroup: function (req, res, next) {
		var groupId = req.body.groupId;
		var description = req.body.name;
		var userName = req.userName;
		var status = req.body.status;
		status = status ? status : 1;
		var inParams = [groupId, description, userName, status];
		Goods.modifyGoodsGroup(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	//包装规则
	getPackageRule: function (req, res, next) {
		var name = req.query.name;
		var status = req.query.status;
		status = status ? status : -1;
		name = name ? name : "";
		var inParams = [name, status];
		Goods.getPackageRule(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPackageRuleOringinDetail: function (req, res, next) {
		var ruleId = req.query.ruleId;
		var inParams = [ruleId];
		Goods.getPackageRuleOringinDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getPackageRuleDestinationDetail: function (req, res, next) {
		var ruleId = req.query.ruleId;
		var inParams = [ruleId];
		Goods.getPackageRuleDestinationDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addPackageChangeRuleHeader: function (req, res, next) {
		var ruleDesc = req.body.name;
		var userName = req.userName;
		var inParams = [ruleDesc, userName];
		Goods.addPackageChangeRuleHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modifyPackageChangeRuleHeader: function (req, res, next) {
		var ruleId = req.body.ruleId;
		var ruleDesc = req.body.name;
		var status = req.body.status;
		var userName = req.userName;
		var inParams = [ruleId, ruleDesc, status, userName];
		Goods.modifyPackageChangeRuleHeader(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	addPackageRuleOringinDetail: function (req, res, next) {
		var ruleId = req.body.ruleId;
		var goodsId = req.body.goodsId;
		var quantity = req.body.quantity;
		var userName = req.userName;
		var inParams = [ruleId, goodsId, quantity, userName];
		Goods.addPackageRuleOringinDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	addPackageRuleDestinationDetail: function (req, res, next) {
		var ruleId = req.body.ruleId;
		var goodsId = req.body.goodsId;
		var quantity = req.body.quantity;
		var userName = req.userName;
		var inParams = [ruleId, goodsId, quantity, userName];
		Goods.addPackageRuleDestinationDetail(inParams, function (rows) {
			res.json(rows[0]);
		});
	},



	///页面模板
	brand: function (req, res, next) {
		res.render('goods/BrandSetting', { layout: null });
	},
	goods: function (req, res, next) {
		res.render('goods/GoodsSetting', { layout: null });
	},
	categroy: function (req, res, next) {
		res.render('goods/CategroySetting', { layout: null });
	},

	group: function (req, res, next) {
		res.render('goods/GroupSetting', { layout: null });
	},

	package: function (req, res, next) {
		res.render('goods/PackageSetting', { layout: null });
	},

	promotionGoods: function (req, res, next) {
		res.render('goods/PromotionGoodsSetting', { layout: null });
	},
	
};