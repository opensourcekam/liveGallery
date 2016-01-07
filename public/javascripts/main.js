$(document).ready(function () {
    // video play and pause
    $('video').hover(function () {
        console.log(this);
        this.play();
    }, function () {
        this.pause();
        this.currentTime = 0;
    });

    $('video').hover(function () {
        $(this).addClass("blur");
        setTimeout(RemoveClass, 500);
    });

    function RemoveClass() {
        $('video').removeClass("blur");
    }

    //    var timeoutId = 0;
    //
    //    $('video').mousedown(function () {
    //        timeoutId = setTimeout(play, 1000);
    //    }).bind('mouseup mouseleave', function () {
    //        clearTimeout(timeoutId);
    //    });
    //    
    //    function play(){
    //        console.log('play');
    //        console.log(this);
    //    }
});

$(window).load(function () {
    if ($(window).width() < 700) {
        $('video').removeClass('grid__col--1-of-3');
        $('video').addClass('');
    } else {}
    setTimeout(function () {
        $('#loader').css('display', 'none');
        $('main').removeClass('blur');
    }, 2000);

});