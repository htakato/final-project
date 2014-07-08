var kyuko = {
		
}

var calcKyuko = function(){
		return "本日の自主休講確率は" + calcKyukoPerc + "%です"; 
};

var calcKyukoPerc = function(){
		return math.floor(calcWeather.value + kyuko.ishiki.value);
};

var calcWeather = function(){
		if(kyuko.campus = "sfc"){
				return weather.currentloc.value + weather.shonandai.value + weather.sfc.value; 
		}else if(kyuko.campus = "hiyoshiyagami"){
				return weather.currentloc.value + weather.hiyoshiyagami.value;
		}else if(kyuko.campus = "mita"){
				return weather.currentloc.value + weather.mita.value;
		}else if(kyuko.campus = "shinanomachi"){
				return weather.currentloc.value + weather.shinanomachi.value;
		}else if(kyuko.campus = "shiba"){
				return weather.currentloc.value + weather.shiba.value;
		}
};

var startCalc = function(){

};

//Geolocation関連
var showGeolocationError = function(){
};

var showCurrentPosition = function(response){
  console.log(response);
  if(response.status == "OK"){
    memoInputElements.place.value = response.results[0].formatted_address;
  }
};

var buildInvertGeocodingQuery = function(position){
  var latlng = position.coords.latitude + "," + position.coords.longitude;
  return ENDPOINT + "?sensor=true&latlng=" + latlng;
};

var invertGeocode = function(position){
  console.log(position);
  var query = buildInvertGeocodingQuery(position);
  console.log("send invert geocoding query as "  + query);
  $.getJSON(query, showCurrentPosition);
};

var estimateCurrentLocation = function(){
  navigator.geolocation.getCurrentPosition(invertGeocode, showGeolocationError);
};

//initApp
var initApp = function(){
		kyuko.ishiki = document.querySelector("#ishiki");
		kyuko.campus = document.querySelector("#campus");
		kyuko.output = document.querySelector("#kyukoperc");

		var startButton = document.querySelector("#start");
		startButton.addEventlistener("click", calcWeather);
}
initApp;
