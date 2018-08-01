var express = require('express');
var router = express.Router();
var exec = require('../model/execfile');
var upload = require('../model/upload');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/files', upload.array('java', 10), (req, res, next) => {
    res.json({ success: true });
})


router.post('/exec', (req, res, next) => {
    exec.exce(req.body.classname, req.body.methodname).then((so, se) => {
        if (se) {
            res.json({
                result: se
            })
        } else {
            res.json({
                result: so
            })
        }
    }).catch((err) => {
        res.json({
            result: err
        })
    })
})
module.exports = router;