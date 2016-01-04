var express = require('express');
var httpServer = require('http-server');
var router = express.Router();
//var mf = require('mediaFiles');
var videos = require('../data.json');

var dec29 = videos.dec29_mp4;
var dec30 = videos.dec30_mp4;
var dec31 = videos.dec31_mp4;
var dec1 = videos.dec1_mp4;
var dec2 = videos.dec2_mp4;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Live Gallery',
        dec29: dec29,
        dec30: dec30,
        dec31: dec31,
        dec1: dec1,
        dec2: dec2
    });
});

module.exports = router;