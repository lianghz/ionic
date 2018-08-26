var jwt = require('jsonwebtoken');
var credentials = require('../credentials');
module.exports = {
	setTokenUserName: function (req, res, next) {
		//做欸一个中间件，解密token，把用户名放到 req.userName，以便后续路由获取
		var tokenId = req.headers['authorization'];
		console.log("tokenId=" + tokenId);
		jwt.verify(tokenId, credentials.appSecret, function (err, decoded) {
			if (err) {
				req.userName = "";
			} else {
				req.userName = decoded.userName;
			}
		})
		next();
	}
}