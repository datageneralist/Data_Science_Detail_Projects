// Jquery Code
/*Create macro variables to input for API link to change year, etc. */

/*
$.getJSON('/api/events')
    .done(function(data){
    eventData = data;
})
*/

$(document).ready(function(){
	$.getJSON("http://www.bea.gov/api/data?&UserID=E52D1C13-32F0-4FB8-B856-08A7239E7C98&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json").done
		
		console.log(api_data);
});
/*
var api_data = "http://www.bea.gov/api/data?&UserID=E52D1C13-32F0-4FB8-B856-08A7239E7C98&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json";
var json = JSON.parse(api_data);
console.log(json);
*/

//Pull in the BEA API
// var 2014_GDP = "http://www.bea.gov/api/data?&UserID=E52D1C13-32F0-4FB8-B856-08A7239E7C98&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json";


/*
//make an ajax request
var a = {};

$.getJSON(2014_GDP, function(data) {
	a = data;
});

var obj = jQuery.parseJSON( '{ "name": "John" }' );
alert( obj.name === "John" );

prompt("Is this working");

*/