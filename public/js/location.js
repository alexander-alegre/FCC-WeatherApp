$.get("http://ipinfo.io", function(res) {
    // get latitude and longitude
    var apiKey = '75bdde3be636ef2d2c94c5dbfb09f55d';
    var lat = res.loc.substr(0, 7);
    var lon = res.loc.substr(8,20);
    // metric is C
    // imperial is F
    var units = 'imperial';
    $.get("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey+"&units="+units, function(data) {
        $('#temperature').html(data.main.temp + ' F');
    }, "jsonp");
    // display city name
    $('#location').html(res.city + ', ' + res.region);
    // display temperature
}, "jsonp");

