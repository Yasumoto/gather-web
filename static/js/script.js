$(function() {
    $.waypoints.settings.scrollThrottle = 0;
    $.waypoints.settings.resizeThrottle = 0;

    var $p1 = $('#p1');
    $('.kids').waypoint({'offset': '70%', 'handler': function(e, dir) {
        $p1.toggleClass('on', dir == 'down');
    }});
    var $iphone = $('#iphone');
    $('#p2 ul').waypoint({'offset': 60, 'handler': function(e, dir) {
        $iphone.toggleClass('on', dir == 'down');
    }
    });

    $('#p3').waypoint({'offset': 240, 'handler': function(e, dir) {
        $iphone.toggleClass('bottom', dir == 'down');
    }});

    var $faces = $('.people');
    $('#face-in-view').waypoint({'offset': '85%', 'handler': function(e, dir) {
        $faces.toggleClass('on', dir == 'down');
    }});

    var $thingy = $('#thingy');
    $thingy.waypoint({'offset': '65%', 'handler': function(e, dir) {
        $thingy.toggleClass('on', dir == 'down');
    }});

    var i = 1;
    var i_prev = 0;
    setInterval(function() {
        $iphone.removeClass('i' + i_prev);
        $iphone.addClass('i' + i);
        i_prev = i;
        i++;
        if(i > 3) i = 1;
    }, 8000);
});
