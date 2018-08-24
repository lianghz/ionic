import jwt from 'jsonwebtoken';
var token = require('../models/token');
module.exports = {

    Routes: function (app) {
        app.get('/token/update', this.modfiyCustomerToken);
    },
    modfiyCustomerToken: function (req, res, next) {
		var name = 12;
		var tokenId = req.session.userName;
        var tokenIdOld = "";
        var pwd = "";

		var inParams = [name, tokenId, tokenIdOld,pwd];
		token.modfiyCustomerToken(inParams, function (rows) {
			res.json(rows[0]);
		});
	},
}