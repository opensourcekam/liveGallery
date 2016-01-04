var fs = require('fs');
var dirs = [29, 30, 31, 1, 2];
var fileTypes = ['ogg', 'mp4'];

function readOgg(err, data) {
    //    console.log('\n');
    //        console.log('\n');
    var oggArr = [];
    data.forEach(function (ogg) {
        if (ogg != '.DS_Store') {
            oggArr.push(ogg);
        }
    });
    console.log(oggArr);

    return oggArr;
}

function readMP4(err, data) {
    // console.log('Data Arr: ', data);
    // console.log('\n');
    var mp4arr = []
    data.forEach(function (mp4) {
        if (mp4 != '.DS_Store') {
            // var 29 = [ {'video': 'IMG_1737.mp4'}, {'video': 'IMG_1738.mp4'}, {'video': 'IMG_1739.mp4'}, ]
            mp4arr.push(mp4);
        }
    });
    console.log(mp4arr);

    return mp4arr;
}


var getMedia = function () {
    for (var i = 0; i < dirs.length; i++) {
        //console.log(dirs[i]);
//        fs.readdir('./public/videos/' + fileTypes[0] + '/' + dirs[i], readOgg);
        fs.readdir('./public/videos/' + fileTypes[1] + '/' + dirs[i], readMP4);
    }
    console.log("This comes after"); // but actually comes first because async
    //call functions read each dir 
}


module.exports = {
    getMedia: getMedia
}