Google-Map-Helper-For-Umbraco
=============================

Plugin to easily include google map to your umbraco website.

Include these scripts

1) <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script> (Do no need this if you alrady included jquery in your page.)
2) <script src="http://maps.google.com/maps/api/js?sensor=false"></script>


Insert the following tag with specified parameters into your markup.

<div class="map" data-location ="@Umbraco.Field('google')" data-marker="/images/map-icon.png">

1) id = "xxxx" => A unique id. This is mandatory.

2) class="map" => This should not be changed.

3) data-location => Insert the field of google map datatype in. For non umbraco users latitude, Longitude ad zoom as comma seperated values. 
Example data-location="data-location="-31.901725,115.80478300000004,13""

4) data-marker => Custom image to use as marker. If not default marker will be shown.

Here we gO ..
