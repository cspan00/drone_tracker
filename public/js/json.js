
function getJSON() {
var data = $.getJSON('https://cors-anywhere.herokuapp.com/http://api.dronestre.am/data', function(data){
  var dataToStore = JSON.stringify(data)
  localStorage.setItem('key', dataToStore)
});

}



getJSON();
