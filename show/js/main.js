$(document).ready(function () {
    $(".carousel").carousel({
        interval: 3000
    });
    //Enable swiping...
    $(".carousel-inner").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == "right") {//向右划
                //Cycles to the next item.
                $(this).parent().carousel("prev");
            } else if (direction == "left") {//向左划
                //Cycles to the previous item.
                $(this).parent().carousel("next");
            }
        }
    });
});