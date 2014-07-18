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
	alert("Geolocation fail");
};

//現在地の天気を取得
var loadWeatherData = function(pos) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&lon=" + pos.coords.lon;

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText;
 			var WeatherData = JSON.parse(data);
 			console.log(WeatherData.weather[0].id);

			CampusSelect(WeatherData.weather[0].id);
 		}
 	}	
 	request.send("");
};

//キャンパスを選択
var CampusSelect = function(currentlocdata){
	var currentlocdata = currentlocdata;
	console.log(currentlocdata);

	if(campus = "sfc"){
		var coordend = "35.388232&lon=139.427780";
		cloadWeatherData(currentlocdata, coordend);
	}
	else if(campus = "hiyoshiyagami"){
		var coordend = "35.5532735&lon=139.6467629";
		cloadWeatherData(currentlocdata, coordend);
	}
	else if(campus = "mita"){
		var coordend = "35.6480355&lon=139.7429326";
		cloadWeatherData(currentlocdata, coordend);
	}
	else if(campus = "shinanomachi"){
		var coordend = "35.682417&lon=139.71791";
		cloadWeatherData(currentlocdata, coordend);
	}
	else if(campus = "shiba"){
		var coordend = "35.658703&lon=139.751601";
		cloadWeatherData(currentlocdata, coordend);
	}
};

//キャンパスの天気の模様を点数に変換する関数
var calcCampusPoints = function(campusdata, currentlocdata){
	var currentlocdata = currentlocdata;
	var camppusdata = campusdata;
	console.log(campusdata, currentlocdata);

	if(campusdata = 800){
		calcKyuko(0, currentlocdata);
		console.log(campusdata, currentlocdata);
	}
	else if(campusdata = 803){
		calcKyuko(0, currentlocdata);
		console.log(campusdata, currentlocdata);
	}
	else if(campusdata = 301){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata = 311){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata = 701){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata = 741){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata = 501){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata >= 950 && campusdata <= 955){
		calcKyuko(5, currentlocdata);
	}
	else if(campusdata = 200){
		calcKyuko(10, currentlocdata);
	}
	else if(campusdata = 210){
		calcKyuko(10, currentlocdata);
	}
	else if(campusdata = 230){
		calcKyuko(10, currentlocdata);
	}
	else if(campusdata = 201){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 211){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 231){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 302){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 500){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 501){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata = 520){
		calcKyuko(15, currentlocdata);
	}
	else if(campusdata >=312 &&  campusdata <= 321){
		calcKyuko(20, currentlocdata);
	}	
	else if(campusdata >=600 && campusdata<= 622){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 202){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 212){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 221){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 232){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 711){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata = 731){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata >= 751 && campusdata <= 781){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata >=900 && campusdata <= 906){
		calcKyuko(20, currentlocdata);
	}
	else if(campusdata >=956 &&  campusdata <= 962){
		calcKyuko(20, currentlocdata);
	}
};

var calcKyuko = function(campusscore, currentlocdata){
	var campusscore = campusscore;
	var currentlocdata = currentlocdata;
	console.log(campusscore, currentlocdata);

	if(currentlocdata >= "800" && currentlocdata <= 805){
		var perc = campusscore + 0;

		calcPerc(perc);
	}
	else if(currentlocdata = 301){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata = 311){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata = 701){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata = 741){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata = 501){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata >= 950 && currentlocdata <= 955){
		var perc = campusscore + 5;

		calcPerc(perc);
	}
	else if(currentlocdata = 200){
		var perc = campusscore + 10;

		calcPerc(perc);
	}
	else if(currentlocdata = 210){
		var perc = campusscore + 10;

		calcPerc(perc);
	}
	else if(currentlocdata = 230){
		var perc = campusscore + 10;

		calcPerc(perc);
	}
	else if(currentlocdata = 201){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 211){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 231){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 302){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 500){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 501){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata = 520){
		var perc = campusscore + 15;

		calcPerc(perc);
	}
	else if(currentlocdata >=312 &&  currentlocdata <= 321){
		var perc = campusscore + 20;

		calcPerc(perc);
	}	
	else if(currentlocdata >=600 && currentlocdata<= 622){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 202){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 212){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 221){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 232){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 711){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata = 731){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata >= 751 && currentlocdata <= 781){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata >=900 && currentlocdata <= 906){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
	else if(currentlocdata >=956 &&  currentlocdata <= 962){
		var perc = campusscore + 20;

		calcPerc(perc);
	}
};

var outputKyukoPerc = function(perc){
	var perc = perc
	console.log(perc);
	
	document.getElementById("output").innerHTML = "今日の自主休講確率は" + perc + "%です";
};

var commentGenerator = function(perc){
	if(perc >= 0 && perc < 10){
		document.getElementById("output2").innerHTML = "0%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/0.jpg')";
		location.href = "index.html#result";
	}
	else if(perc >= 10 && perc < 30){
		document.getElementById("output2").innerHTML = "20%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/20.jpg')";
	}
	else if(perc >= 30 && perc < 50){
		document.getElementById("output2").innerHTML = "40%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/40.jpg')";
	}
	else if(perc >= 50 && perc < 70){
		document.getElementById("output2").innerHTML = "60%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/60.jpg')";
	}
	else if(perc >= 70 && perc < 80){
		document.getElementById("output2").innerHTML = "80%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/80.jpg')";
	}
	else if(perc >= 80 && perc <= 100){
		document.getElementById("output2").innerHTML = "100%の域";
		document.getElementById("picture").style.backgroundImage = "url('/~s13526ht/final-project/img/clipart/100.jpg')";
	}
	else{
		document.getElementById("output2").innerHTML = "なんかおかしいよ";
	}
};


//キャンパスの天気
var cloadWeatherData = function(currentlocdata, coordend) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + coordend;

 	 console.log(currentlocdata);
 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText;
 			var WeatherData = JSON.parse(data);

 			console.log(currentlocdata);
 			//document.getElementById("output").innerHTML = WeatherData.weather[0].id + " " + currentlocdata;
		  	if(WeatherData.weather[0].id >= 800 && WeatherData.weather[0].id <= 805){
			 	calcKyuko(0, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 301){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 311){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 701){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 741){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 501){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id >= 950 && WeatherData.weather[0].id <= 955){
			 	calcKyuko(5, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 200){
			 	calcKyuko(10, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 210){
			 	calcKyuko(10, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 230){
			 	calcKyuko(10, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 201){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 211){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 231){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 302){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 500){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 501){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 520){
			 	calcKyuko(15, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id >=312 &&  WeatherData.weather[0].id <= 321){
			 	calcKyuko(20, currentlocdata);
			 }	
			 else if(WeatherData.weather[0].id >=600 && WeatherData.weather[0].id<= 622){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 202){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 212){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 221){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 232){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 711){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id = 731){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id >= 751 && WeatherData.weather[0].id <= 781){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id >=900 && WeatherData.weather[0].id <= 906){
			 	calcKyuko(20, currentlocdata);
			 }
			 else if(WeatherData.weather[0].id >=956 &&  WeatherData.weather[0].id <= 962){
			calcKyuko(20, currentlocdata);
			}
 		}
 	}	
 	request.send("");
};

var calcPerc = function(oldperc){
	var ishiki = document.querySelector("#ishiki");
	var oldperc = oldperc;
	console.log(oldperc);

	if(ishiki = "veryhigh"){
		var perc = oldperc + 0;

		outputKyukoPerc(perc);
		commentGenerator(perc)	
	}
	else if(ishiki = "high"){
		var perc = oldperc + 10;

		outputKyukoPerc(perc);
		commentGenerator(perc);
	}
	else if(ishiki = "somewhat"){
		var perc = oldperc + 20;

		outputKyukoPerc(perc);
		commentGenerator(perc);	
	}
	else if(ishiki = "normal"){
		var perc = oldperc + 30;

		outputKyukoPerc(perc);
		commentGenerator(perc);	
	}
	else if(ishiki = "somewhatlow"){
		var perc = oldperc + 40;

		outputKyukoPerc(perc);
		commentGenerator(perc);	
	}
	else if(ishiki = "low"){
		var perc = oldperc + 50;

		outputKyukoPerc(perc);
		commentGenerator(perc);	
	}
	else if(ishiki = "verylow"){
		var perc = oldperc + 60;

		outputKyukoPerc(perc);
		commentGenerator(perc);
	}
};

function initApp(){
		navigator.geolocation.getCurrentPosition(loadWeatherData, geolocationError);
};
