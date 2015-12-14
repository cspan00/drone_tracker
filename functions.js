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





function createMap(){
var mapOptions = {
    center: new google.maps.LatLng(20.33877,57.43193),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

for( i = 0; i < getLon().length; i++ ) {
        var position = new google.maps.LatLng(getLat()[i], getLon()[i]);
        // bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            // title: markers[i][0]
        });
}
};



createMap();
console.log(getLon()[5]);
