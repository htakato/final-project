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
//Weather API関連
var getWeatherData = function(){
        var weather = 0;
        var out = document.getElementById("weather");

        var url = "http://api.openweathermap.org/data/2.5/weather?q=london";


        $.ajax({
            dataType: "json",
            url: url,
            data: data,
            success: function(data){
                weather = data.list[0].weather.main;
            },
            error: function(errordata){
            	return;
            }
        });

		out.innerHTML = weather;        
    };
//Geolocation関連

var estimateCurrentLocation = function(){
	var output = document.getElementById("kyukoperc");

	if(!navigator.geolocation){
		return;
	}

	var success = function(position){
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var currentlocation = latitude + "" + longitude;
	};

	var error = function(){
		return;
	};

	navigator.geolocation.getCurrentPosition(success, error);
};

//initApp
//var initApp = function(){
//		var startButton = document.querySelector("#start");
//		startButton.addEventlistener("click", getWeatherData);
//};

//initApp();
