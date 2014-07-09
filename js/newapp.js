var kyuko = {
	message: ""
};

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
	 kyuko.output.textContent = orehamoudameda;
};

var Geocode = function(){
  kyuko.output.textContent = position.coords.latitude + "," + position.coords.longitude;
};

var estimateCurrentLocation = function(){
	var message = "俺はもうダメだ";
    kyuko.output.textContent = testing;
};

//initApp
var initApp = function(){
		kyuko.output = document.querySelector("#kyukoperc");

		var startButton = document.querySelector("#start");
		startButton.addEventlistener("click", estimateCurrentLocation);
};
initApp;
