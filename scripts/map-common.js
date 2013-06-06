$(document).ready(function(){
    $('.map').each(function () {
        var location = $(this).attr("data-location");
        var marker = $(this).attr("data-marker");
        if (location) {
            ShowMap(location.split(","), divId,marker);
        }
    }); 
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