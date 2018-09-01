var customer = require('../models/customer');
var credentials = require('../credentials');
var jwt = require('jsonwebtoken');

module.exports = {
	Routes: function (app) {
		//调用模板
		app.post('/customer/addAddress', this.addAddress);
		app.get('/customer/getAddress', this.getAddress);
		app.get('/customer/getDefaultAddress', this.getDefaultAddress);
		app.post('/customer/refresh', this.refreshCustomerToken);
		app.post('/customer/login', this.login);
		app.post('/customer/verifytoken', this.verifyToken);
		app.post('/customer/addCustomer', this.addCustomer);
		
		// app.post('/token/update', this.modfiyCustomerToken);

	},
	addAddress: function (req, res, next) {
		var customerId = req.body.customerId;
		var regionId1 = req.body.regionId1;
		var regionId2 = req.body.regionId2;
		var regionId3 = req.body.regionId3;
		var regionId4 = req.body.regionId4;
		var regionId5 = req.body.regionId5;
		var address = req.body.address;
		var phone = req.body.phone;
		var linkMan = req.body.linkMan;
		var addressId = req.body.addressId;
		var isDefault = req.body.isDefault;
		regionId1 = regionId1 ? regionId1 : 0;
		regionId2 = regionId2 ? regionId2 : 0;
		regionId3 = regionId3 ? regionId3 : 0;
		regionId4 = regionId4 ? regionId4 : 0;
		regionId5 = regionId5 ? regionId5 : 0;
		addressId = addressId || 0;
		isDefault = isDefault || 0;


		var inParams = [customerId, regionId1, regionId2, regionId3, regionId4, regionId5, address, phone, linkMan, addressId, isDefault];

		customer.addAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},


	getAddress: function (req, res, next) {
		var customerId = req.userName;
		var inParams = [customerId];
		customer.getAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},

	getDefaultAddress: function (req, res, next) {
		var customerId = req.userName;
		var inParams = [customerId];
		customer.getDefaultAddress(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	modfiyCustomerToken: function (req, res, next) {
		var name = 12;
		var tokenId = req.userName;
		var tokenIdOld = "";
		var pwd = "";

		var inParams = [name, tokenId, tokenIdOld, pwd];
		customer.modfiyCustomerToken(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	verifyToken: function (req, res, next) {
		//在受限制页面进入前调用，检查token是否有效，并把检查结果返回。前端根据返回结果，如果status=err则转到login页面。
		var tokenId = req.headers['authorization'];
		var inParams = [tokenId];
		customer.getCustomerToken(inParams, function (rows) {
			// res.json(rows[0]);
			if (rows[0]) {
				jwt.verify(rows[0].TokenId, credentials.appSecret, function (err, decoded) {
					if (err) {
						console.log("err=="+err)
						res.json({
							status: 'err',
							userName:'',
							message:err
						});
					} else {
						res.json({
							status: 'success',
							userName:decoded.userName,
							message:''
						});
					}
				})
			} else {
				res.json({
					status: 'err',
					userName:'',
					message:'不存在token'
				});
			}
		});
	},
	refreshCustomerToken: function (req, res, next) {
		var tokenId = req.headers['authorization'];
		console.log("tokenId=" + tokenId)
		var inParams = [tokenId];
		customer.getCustomerToken(inParams, function (rows) {
			// res.json(rows[0]);
			if (rows[0]) {
				//存在token，重新生成一个token，即延长期限
				jwt.verify(rows[0].TokenId, credentials.appSecret, function (err, decoded) {
					if (err) {
						res.json({
							status: 'err',
							token: '',
							message:err							
						});
					} else {
						//token正确，重新给token 10天有效期
						var token = jwt.sign({ userName: decoded.userName }, credentials.appSecret, {
							'expiresIn': 60 * 60 * 24 *10 // 设置过期时间10天
						});
						var name = decoded.userName;
						var tokenIdOld = tokenId;
						tokenId = token;
						var pwd = "";
						inParams = [name, tokenId, tokenIdOld, pwd];
						customer.modfiyCustomerToken(inParams, function () {
							res.json({
								status: 'success',
								token: token
							});
						})
					}
				})
			} else {
				res.json({
					status: 'err',
					token: '',
					message:'token不存在'
				});
			}
		});
	},
	login: function (req, res, next) {
		// var tokenId =  req.headers['authorization'];
		var customerId = req.body.userName;
		var passCode = req.body.password;
		var inParams = [customerId, passCode];
		customer.login(inParams, function (rows) {
			// res.json(rows[0]);
			if (rows[0]) {
				//登陆成功
				var token = jwt.sign({ userName: customerId }, credentials.appSecret, {
					'expiresIn': 60 * 60 * 10 // 设置过期时间10天
				});
				var tokenIdOld = "";
				tokenId = token;
				inParams = [customerId, tokenId, tokenIdOld, passCode];
				customer.modfiyCustomerToken(inParams, function () {
					res.json({
						status: 'success',
						message: '登陆成功',
						token: token
					});
				})
			} else {
				res.json({
					status: 'err',
					message: '用户名或密码错误！',
					token: ''
				});
			}
		});
	},
	addCustomer: function (req, res, next) {
		var customerId = req.body.customerId;
		var nickName = req.body.nickName;
		var customerName = req.body.customerName;
		var address1 = req.body.address1;
		var address2 = req.body.address2;
		var regionId = req.body.regionId;
		var idcard = req.body.idcard;
		var telphone = req.body.telphone;
		var mobile = req.body.mobile;
		var sex = req.body.sex;
		var birthday = req.body.birthday;
		var jobId = req.body.jobId;
		var email = req.body.email;
		var passCode = req.body.password;
		var verify = new Buffer(generateMixed(10));
		// console.log("verify1="+verify);
		verify = verify.toString('base64');
		// console.log("verify2="+verify);
		var inParams = [customerId,nickName,customerName,address1,address2,regionId,idcard,telphone,mobile,sex,
			birthday,jobId,email,passCode,verify];

		customer.addCustomer(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
	

}

var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generateMixed(n) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}