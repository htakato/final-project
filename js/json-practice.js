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
	navigator.geolocation.getCurrentPosition(sendget, geolocationError);
};

var geolocationError = function(){
	return;
};

var sendget = function(pos) {
 	var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&lon=" + pos.coords.longitude;

 	var request = createXMLHttpRequest();
 	request.open("GET", url, true);
 	request.onreadystatechange = function(){
 		if(request.readyState == 4 && request.status == 200){
 			var result = document.getElementById("output");
 			var text = document.createTextNode(decodeURI(request.responseText));
 			var json = JSON.parse(text);

 			
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