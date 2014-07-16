 var ishiki = document.querySelector("#ishiki");
 var campus = document.querySelector("#campus");

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

var geolocationError = function(){
	return;
};
var test = function(){
	document.getElementById("output").innerHTML = hoge();
}
//現在地の天気を取得
var loadWeatherData = function() {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=150";

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText;
 			var WeatherData = JSON.parse(data);

			CampusSelect(WeatherData.weather[0].id);
 		}
 	}	
 	request.send("");
};

//キャンパスを選択
var CampusSelect = function(currentlocdata){
	var currentlocdata = currentlocdata;

	if(campus = "sfc"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
	if(campus = "hiyoshiyagami"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
	if(campus = "mita"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
	if(campus = "shinanomachi"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
	if(campus = "shiba"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
};

//キャンパスの天気の模様を点数に変換する関数
var calcCampusPoints = function(campusdata, currentlocdata){
	if(campusdata => 800 && campusdata <= 804){
		calcKyuko(0, currentlocdata);
	}
	if(campusdata = 302 || campusdata = 311){
		calcKyuko(5, currentlocdata);
	}
	if(campusdata >= 950 && campusdata <= 955){
		calcKyuko(5, currentlocdata);
	}
	if(campusdata = 200 || campusdata = 210 || campusdata = 230){
		calcKyuko(10, currentlocdata);
	}
	if(campusdata = 302 || campusdata = 500 || campusdata = 501 || campusdata = 520){
		calcKyuko(15, currentlocdata);
	}
	if(campusdata >=312 && 321){
		calcKyuko(20, currentlocdata);
	}	
	if(campusdata >=600 && 622){
		calcKyuko(20, currentlocdata);
	}
	if(campusdata = 711 || campusdata = 731){
		calcKyuko(20, currentlocdata);
	}
	if(campusdata >= 751 && 781){
		calcKyuko(20, currentlocdata);
	}
	if(campusdata >=900 && 906){
		calcKyuko(20, currentlocdata);
	}
	if(campusdata >=956 && 962){
		calcKyuko(20, currentlocdata);
	}
}

//キャンパスの天気
var cloadWeatherData = function(currentlocdata, coordend) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + coordend;

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText;
 			var WeatherData = JSON.parse(data);

			calcCampusPoints(WeatherData.weather[0].id, currentlocdata);
 		}
 	}	
 	request.send("");
};

function initApp(){
		navigator.geolocation.getCurrentPosition(loadWeatherData, geolocationError);
};
