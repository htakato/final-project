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

var loadWeatherData = function(pos) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 35 + "&lon=" + 150;

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var data = request.responseText
 			var WeatherData = JSON.parse(data);

 			document.getElementById("output").innerHTML = WeatherData.weather[0].main;
 		}
 	}
 	request.send("");
 }













//  var data = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';
//
//  var json = JSON.parse(data);
// 
//	alert(json["name"]); //mkyong
//	alert(json.name); //mkyong
// 
//	alert(json.address.streetAddress); //88 8nd Street
//	alert(json["address"].city); //New York
// 
//	alert(json.phoneNumber[0].number); //111 111-1111
//	alert(json.phoneNumber[1].type); //fax
//
//	alert(json.phoneNumber.number); //undefined