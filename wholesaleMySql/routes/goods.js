var controller = require('./modules/case7controller.js');
var formidable = require('formidable');

//--------------case7
//--checkresul

module.exports = function (app) {
    app.post('/case7/upload/checkresult', function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) return res.redirect(303, '/error');
            var filepath = files.filename.path;
            controller.checkResultSaveData(res, filepath, fields);
        });
    });
    app.get('/case7/down/checkresult', function (req, res) {
        controller.checkResultToExcel(req, res);
    });
    app.get('/case7/checkresultgrid', function (req, res) {
        controller.checkResultGrid(req, res);
    });
    app.get('/case7/checkresult', function (req, res) {

        controller.checkResultGetData(req, res);
    });
    ///setArgeement客户协议配置
    app.post('/case7/upload/setargeement', function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) return res.redirect(303, '/error');
            var filepath = files.filename.path;

            controller.setArgeementSaveData(res, filepath, fields);
        });
    });
    app.get('/case7/down/setargeement', function (req, res) {
        controller.setArgeementDataToExcel(req, res);
    });
    app.get('/case7/setargeementgrid', function (req, res) {
        controller.setArgeementGrid(req, res);
    });

    app.get('/case7/setargeement', function (req, res) {
        controller.setArgeementGetData(req, res);
        //res.render('checkresult',{layout:null});
    });
    //--sales
    app.post('/case7/upload/sales', function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) return res.redirect(303, '/error');
            var filepath = files.filename.path;
            controller.salesSaveData(res, filepath, fields);
        });
    });
    app.get('/case7/down/sales', function (req, res) {
        controller.salesDataToExcel(req, res);
    });
    app.get('/case7/salesgrid', function (req, res) {
        controller.salesGrid(req, res);
    });
    app.get('/case7/sales', function (req, res) {
        controller.salesGetData(req, res);
    });
    //--calculate
    app.get('/case7/calcresultgrid', function (req, res) {
        controller.calcResultGrid(req, res);
    });

    app.get('/case7/calcresultview', function (req, res) {
        controller.getCalcResultView(req, res);
    });

    app.post('/case7/saveversion', function (req, res) {
        controller.checkVersion(req, res);
    });
    app.get('/case7/down/calcresult', function (req, res) {
        controller.calcResultDataToExcel(req, res);
    });

    ///历史版本
    app.get('/case7/down/history', function (req, res) {
        controller.versionsDataToExcel(req, res);
    });
    app.get('/case7/historygrid', function (req, res) {
        controller.versionsGrid(req, res);
    });
    app.get('/case7/history', function (req, res) {

        controller.versionsGetData(req, res);
    });
    app.get('/case7/version', function (req, res) {

        controller.versionsGetHistory(req, res);
    });

    app.get('/case7/down/versionsGetHistoryToExcel', function (req, res) {
        controller.versionsGetHistoryToExcel(req, res);
    });
}