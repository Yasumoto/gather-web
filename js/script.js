function updateTime() {
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;
    return currentTimeString;
}

var $time = $('time');
$time.text(updateTime);
setInterval(function() {
    $time.text(updateTime);
}, 1000 * 15);
