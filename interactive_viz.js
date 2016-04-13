// Jquery Code
/*Create macro variables to input for API link to change year, etc. */

/*
$.getJSON('/api/events')
    .done(function(data){
    eventData = data;
})
*/
getKey();
var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";
/*function jsonCallback(){
		"sites":[
			{
				"siteName": "JQUERY4U",
				"domainName": "http://www.jquery4u.com",
				"description": "#1 jQuery Blog for your Daily News, Plugins, Tuts/Tips & Code Snippets."
			},
			{
				"siteName": "BLOGOOLA",
				"domainName": "http://www.blogoola.com",
				"description": "Expose your blog to millions and increase your audience."
			},
			{
				"siteName": "PHPSCRIPTS4U",
				"domainName": "http://www.phpscripts4u.com",
				"description": "The Blog of Enthusiastic PHP Scripters"
			}
		]};
*/
$(document).ready(function(){
	var myDataArray = []; 
    $.ajax({
        url: api_url,
        dataType: 'jsonp',
		jsonpCallback: 'api_test',
		jsonp: 'jsonp',
		}).done(function(response, error){
			console.log(error);
			var dataArray = response.BEAAPI.Results.Data;
			for(var i=0; i<dataArray.length; i++){
				var segment = dataArray[i];
				
				$('body').append('<p>'+segment.DataValue+ '</p>')
			}
		});
		function api_test () {
};
	
	
	/*$.ajax({
		url: api_url,
		async: false,
		cache: false,
		/*jsonpCallback: 'jsonCallback',
		contentType: "application/json",
		crossdomain: true,
		dataType: "jsonp"
	})
	.done(function(pizza, error){
		console.log(error);
		alert("success");
		return pizza;
	});*/
});



/*
$(document).ready(function(){
	$.getJSON("http://www.bea.gov/api/data?&UserID=E52D1C13-32F0-4FB8-B856-08A7239E7C98&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json").done
		
		console.log(api_data);
});
*/

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