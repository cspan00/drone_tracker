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
var mapOptions = {
    center: new google.maps.LatLng(20.33877,57.43193),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.HYBRID
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// iterate through the arrays returned by getLat and GetLon and place markers on the map
for( i = 0; i < getLon().length; i++ ) {
        var position = new google.maps.LatLng(getLat()[i], getLon()[i]);

        marker = new google.maps.Marker({
            // html: infoHtml,
            position: position,
            map: map,

        });
}
};



createMap();
console.log(getLon()[5]);
