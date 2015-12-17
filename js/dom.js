
function createMap(){
  var styles = [

    {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},

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
    zoom: 4,
    center: new google.maps.LatLng(20.33877,57.43193),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');


// iterate through the arrays returned by getLat and GetLon and place markers on the map


        var lats = setYearLat()
        var lons = setYearLon()
        var deaths = setDeaths()
        var dates = setDates();
        var summaries = setSummary()
        var twitterIds = setTwitter()

for( i = 0; i < lats.length; i++ ) {

        var position = new google.maps.LatLng(lats[i], lons[i])


        var summary = summaries[i]
        var death = deaths[i]
        var date = formatDate(dates[i])
        var twitterId = twitterIds[i]




        // var deaths = data['strike'][i]['deaths_max']
        // var twitterId = data['strike'][i]['tweet_id']
        var image = 'graphics/red_x.png'
        var title = setInfo(date, summary, death, twitterId)

        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            icon: image

        });



var infoWindow = new google.maps.InfoWindow();
google.maps.event.addListener(marker, 'click', (function() {


            infoWindow.setContent(this.title);
            infoWindow.open(map, this);

       }));


}
 };


createMap();
$('#select_year').change(function(){
  createMap();

});
