module.exports = function () {
    return {
        readMP4: function (err, data) {
            //console.log('Data Arr: ', data);
            console.log('\n');
            data.forEach(function (mp4) {
                if (mp4 != '.DS_Store') {
                    console.log(mp4);
                    return mp4;
                }
            });
        },
        readOgg: function (err, data) {
            //console.log('Data Arr: ', data);
            console.log('\n');
            data.forEach(function (ogg) {
                if (ogg != '.DS_Store') {
                    console.log(ogg);
                    return ogg;
                }
                //console.log(v);
            });
        },
        getMedia: function () {
            for (var i = 0; i < dirs.length; i++) {
                //        console.log(dirs[i]);
                fs.readdir('./public/videos/' + fileTypes[0] + '/' + dirs[i], readOgg);
                fs.readdir('./public/videos/' + fileTypes[1] + '/' + dirs[i], readMP4);
            }
        }
    }
}

