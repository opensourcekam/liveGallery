var express = require('express');
var httpServer = require('http-server');
var router = express.Router();
var mf = require('mediaFiles');
var videos = require('../data.json');

//running this will give all files for JSON
//    TODO:
//Automate mf.getMedia() so it writes directly to data.JSON

//console.log(mf.getMedia());

var dec29 = videos.dec29_mp4;
var dec30 = videos.dec30_mp4;
var dec31 = videos.dec31_mp4;
var dec1 = videos.dec1_mp4;
var dec2 = videos.dec2_mp4;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Live Gallery',
        dec29: dec29
    });
});

/* GET 30 */
router.get('/30', function (req, res) {
    res.render('30', {
        title: 'Live Gallery',
        dec30: dec30
    });
});
/* GET 31 */
router.get('/31', function (req, res) {
    res.render('31', {
        title: 'Live Gallery',
        dec31: dec31
    });
});
/* GET 1 */
router.get('/1', function (req, res) {
    res.render('1', {
        title: 'Live Gallery',
        dec1: dec1
    });
});
/* GET 2 */
router.get('/2', function (req, res) {
    res.render('2', {
        title: 'Live Gallery',
        dec2: dec2
    });
});

module.exports = router;