




function getLat(){

  strikeLat = []
  for(var i = 0; i < data['strike'].length; i++){
  strikeLat.push(data['strike'][i]['lat'])
   }
  return strikeLat;
};


function getLon(){

  strikeLon = []
  for(var i = 0; i < data['strike'].length; i++)
  strikeLon.push(data['strike'][i]['lon'])
  return strikeLon;
};

function formatDate(date){
  date = date;
  var months = ['null', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December']

  var month = months[date.charAt(6)]
  var year = date.substr(0, 4)
  var day = date.substr(8,2)
  // console.log(year);
  // console.log(month);
  // console.log(day);

  var newDate = ''+month+' '+day+' '+year+''

  return newDate;



};







function setInfo(date, summary, deaths, twitterId){


  var info = '<div style="font-family:menlo;font-size:20px;color:red;">'+date+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">'+summary+
  '</div><br><div style="font-family:menlo;font-size:15px;color:black;">deaths:'+deaths+'</div><br><div><a href = https://twitter.com/dronestream/status/'+twitterId+'/>read more</a></div>'




  return info;
};









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
for( i = 0; i < data['strike'].length; i++ ) {
        var position = new google.maps.LatLng(getLat()[i], getLon()[i]);
        var date = formatDate(data['strike'][i]['date'].substr(0,10));
        var summary = data['strike'][i]['narrative']
        var deaths = data['strike'][i]['deaths_max']
        var twitterId = data['strike'][i]['tweet_id']
        var image = 'red_x.png'
        var title = setInfo(date, summary, deaths, twitterId)

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
          // infoWindow.setContent(infoWindowContent);
          // infoWindow.open(map, marker);
       }));


}
};


createMap();
// formatDate(data['strike'][0]['date'].substr(0,10))
