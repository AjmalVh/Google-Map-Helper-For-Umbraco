$(document).ready(function(){
    $('.map').each(function () {
        var location = $(this).attr("data-location");
        var marker = $(this).attr("data-marker");
        var divId = $(this).attr("id");
            if (location.indexOf('[') > -1)
            {
                var locationArray = '[' + jQuery.trim($(this).attr("data-location")) + ']';
                ShowMultipleMaps(eval(locationArray), divId, marker);
            }
            else
            {
                ShowMap(location.split(","), divId, marker);
            }
        



        /*if (location) {
            ShowMap(location.split(","), divId,marker);
        }*/
    });
 /*   $('.multiplemap').each(function () {
        var locationArray = '[' + jQuery.trim($(this).attr("data-location")) + ']';
        var marker = $(this).attr("data-marker");
        var divId = $(this).attr("id");
        if (locationArray)
        {
            ShowMultipleMaps(eval(locationArray), divId, marker);
        }
    });*/
});
function ShowMap(location, pH, marker) {
    if (location.length < 3) return;
    var startLat = location[0];
    var startLon = location[1];
    var zoom = parseInt( location[2]);
    var image = marker;
    var mapOptions = { zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, center: new google.maps.LatLng(startLat, startLon) };
    var map = new google.maps.Map(document.getElementById(pH), mapOptions);
    var markerObj;
    if (image != null && image != "") {
        markerObj = new google.maps.Marker({ position: new google.maps.LatLng(startLat, startLon), map: map, title: '', icon: image });
    } else {
        markerObj = new google.maps.Marker({ position: new google.maps.LatLng(startLat, startLon), map: map, title: ''});
    }
}

function ShowMultipleMaps(locations, pH, markerImg){
    var startLat;
    var startLon;
    if (locations.length > 0) {
        startLat = locations[0][0];
        startLon = locations[0][1];
    }
    var zoom = parseInt(locations[0][2]);
    var mapOptions = { zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, center: new google.maps.LatLng(startLat, startLon) };
    var map = new google.maps.Map(document.getElementById(pH), mapOptions);
    var image = markerImg;
    var marker;
    for (i = 0; i < locations.length; i++) {
        if (image != null && image != "")
        {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: map, title: '', icon: image
            });
         }
         else
        {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: map, title: ''
            });

         }
    }
}

