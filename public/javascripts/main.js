$(document).ready(function () {
    // video play and pause
    $('video').hover(function () {
        this.play();
    }, function () {
        this.pause();
    });

    $('video').hover(function () {
        $(this).addClass("blur");
        setTimeout(RemoveClass, 500);
    });

    function RemoveClass() {
        $('video').removeClass("blur");
    }

});