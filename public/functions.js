function getLat(){

  strikeLat = []
  for(var i = 0; i < data['strike'].length; i++)
  strikeLat.push(data['strike'][i]['lat'])
  return strikeLat;

}
function getLon(){

  strikeLon = []
  for(var i = 0; i < data['strike'].length; i++)
  strikeLon.push(data['strike'][i]['lon'])
  return strikeLon;

}





// idea!!! to select year, make a new function for each year that only populates the map by selected year.




function createMap(){
  var styles = [
    {
  "featureType": "landscape",
  "stylers": [
    { "color": "#E7D1A2" }
  ]
},{
  "featureType": "poi.park",
  "stylers": [
    { "visibility": "off" }
  ]
},{
  "featureType": "water",
  "stylers": [
    { "hue": "#0077ff" },
    { "lightness": -56 },
    { "saturation": -8 }
  ]
},{
  "featureType": "road",
  "stylers": [
    { "color": "#000000" }
  ]
},{
  "featureType": "poi.government",
  "stylers": [
    { "visibility": "on" }
  ]
}
    ];






    var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});



var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(20.33877,57.43193),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');


// iterate through the arrays returned by getLat and GetLon and place markers on the map
for( i = 0; i < getLon().length; i++ ) {
        var position = new google.maps.LatLng(getLat()[i], getLon()[i]);

        marker = new google.maps.Marker({
            position: position,
            map: map,


        });

var infoHTML = data['strike'][0]['narrative']

var infoWindow = new google.maps.InfoWindow();
google.maps.event.addListener(marker, 'click', (function() {
            console.log(this);
            console.log('worked');
            infoWindow.setContent(infoHTML);
            infoWindow.open(map, this);
          // infoWindow.setContent(infoWindowContent);
          // infoWindow.open(map, marker);
       }));





}
};



createMap();
console.log(getLon()[5]);
