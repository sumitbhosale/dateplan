var request = require("request");
var isprime = require('isprime');

request("https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02", function(error, response, body) {
 
var dateObj = new Date();
var day = dateObj.getUTCDate();
if(isprime(day)){
console.log(body);
}else{
console.log("Date is not prime so no date");
}
 
});