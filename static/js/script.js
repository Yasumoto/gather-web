$(function() {
    var types = {
        1: 'a group todo list',
        2: 'a place',
        3: 'who can make it',
        4: 'a movie',
        5: 'anything else',
        6: 'a time'
    };

    $.waypoints.settings.scrollThrottle = 0;
    $.waypoints.settings.resizeThrottle = 0;

    var $p1 = $('#p1');
    var $p3 = $('#p3');
    $('.kids').waypoint({'offset': '70%', 'handler': function(e, dir) {
        $p1.toggleClass('on', dir == 'down');
        $p3.removeClass('on');
    }});
    var $iphone = $('#iphone');
    $('#p2 ul').waypoint({'offset': 60, 'handler': function(e, dir) {
        $iphone.toggleClass('on', dir == 'down');
    }
    });

    $p3.waypoint({'offset': 240, 'handler': function(e, dir) {
        $iphone.toggleClass('bottom', dir == 'down');
        $p3.addClass('on');
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
    var $pi = $('.iphone-icons');
    var $pi_off = $('.iphone-icons-off');

    var $text = $('#iphone-text strong');
    setInterval(function() {
        $iphone.removeClass('i' + i_prev);
        $iphone.addClass('i' + i);
        i_prev = i;
        i++;
        if(i > 6) i = 1;
        $pi_off.removeClass('on');
    }, 9000);
    $pi.on('transitionend webkitTransitionEnd', function() {
        $pi_off.addClass('on');
        $text.text(types[i]);
    });

    $('#more').click(function(e){
        e.preventDefault();
        $('html, body').animate({'scrollTop': 1000}, 2500);
    });
});
