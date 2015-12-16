function yearMap(){

  function setYearLat(){
  var select_year = $('#select_year').val()
  var latYear = [];
  //iterate through data and compare year to year selected, if it matches, return lat longs for that year.
  for(i = 0; i < data['strike'].length; i++){
    if(data['strike'][i]['date'].substr(0,4) === select_year){
      latYear.push(data['strike'][i]['lat'])


    }
    else if(select_year === "all"){
    latYear.push(data['strike'][i]['lat'])

    }


    }
    return latYear;
};
function setYearLon(){
var select_year = $('#select_year').val()
var lonYear = [];
//iterate through data and compare year to year selected, if it matches, return lat longs for that year.
for(i = 0; i < data['strike'].length; i++){
  if(data['strike'][i]['date'].substr(0,4) === select_year){
    lonYear.push(data['strike'][i]['lon'])

  }
  else if(select_year === "all"){
  lonYear.push(data['strike'][i]['lon'])

  }

  }
return lonYear;

}


function createNewMap(){
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
for( i = 0; i < data['strike'].length; i++ ) {
        var position = new google.maps.LatLng(setYearLat()[i], setYearLon()[i]);
        var date = data['strike'][i]['date'].substr(0,10);
        var summary = data['strike'][i]['narrative']
        var deaths = data['strike'][i]['deaths_max']
        var twitterId = data['strike'][i]['tweet_id']
        var image = 'greenDot.png'
        var title = setInfo(date, summary, deaths, twitterId)

        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            icon: image

        });



var infoWindow = new google.maps.InfoWindow();
google.maps.event.addListener(marker, 'click', (function() {
            console.log(this);

            infoWindow.setContent(this.title);
            infoWindow.open(map, this);
          // infoWindow.setContent(infoWindowContent);
          // infoWindow.open(map, marker);
       }));


}
};






createNewMap();
console.log(setYearLat());

};
