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
//ここからWeather API関連

function createXMLHttpRequest() {
	if(window.createXMLHttpRequest){
		return new XMLHttpRequest()
	} else if (window.ActiveXObject){
		try{
			return new ActiveXObject("Msxml2.XMLHTTP")
		} catch(e2){
			try{
				new ActiveXObject("Microsoft.XMLHTTP")
			}catch(e2){
				return null
			}
		}
	} else {
		return null
	}
}

var estimateCurrentLocation = function(){
	navigator.geolocation.getCurrentPosition(loadWeatherData, geolocationError);
};

var geolocationError = function(){
	return;
};

//現在地の天気を取得
var loadWeatherData = function(pos) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude;

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText
 			var campus = document.querySelector("#campus");
 			var WeatherData = JSON.parse(data);

 			document.getElementById("output").innerHTML = WeatherData.weather[0].main;
 		}
 	}
 	request.send("");
 }

var CampusSelection = function(){
	var campus = document.querySelector("#campus");
	
	if(campus = "sfc"){
		loadCampusWeatherData(35.388167, 139.427378);
	}
	if(campus = "mita"){

	}
	if(campus = "hiyoshiyagami"){

	}
	if(campus = "shinanomachi"){

	}
	if(campus = "shiba"){

	}
}

//キャンパスの天気
function loadCampusWeatherData(lat, lon){
	var request = createXMLHttpRequest();
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;

	request.open("GET", url, true);
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var data = request.responseText
			var WeatherData = JSON.parse(data);

			document.getElementById("output2").innerHTML = WeatherData.weather[0].main;
		}
	}
 	request.send("");
};

var initapp = function(){
	estimateCurrentLocation();
	CampusSelection();
}
