// Jquery Code
/*Create macro variables to input for API link to change year, etc. */

/* Example code to explain promise, asyncronous relationship
$.getJSON('/api/events')
    .done(function(data){
    eventData = data;
})
*/
// Call API Key from getKey function from another JS file.
// Call API based on the API Key in getKey function
getKey();
var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";

$(document).ready(function(){
	var myDataArray = [];
	var gdpData = []; 
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
				
				$('body').append('<p>'+segment.DataValue+'</p>');
				/* Create an array that has one object. Inside the object
				will be arrays. Each array will have the DataValue, 
				LineDescription and TimePeriod values. Array methods. */

			}
		});
		function api_test () {
};
	
});