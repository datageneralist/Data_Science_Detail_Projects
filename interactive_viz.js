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
	var componentArray = []; 
	var pce = [];
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
				componentArray.push(dataArray[i].LineDescription, dataArray[i].TimePeriod, dataArray[i].DataValue);

					};
			for (var i=0; i<componentArray.length; i+=3) {
				$('body').append('<p>'+componentArray[i]+" "+componentArray[i+1]+" "+componentArray[i+2]+'</p>');

			};

			for(var i=0; i<dataArray.length; i++){
				if (componentArray[i] === 'Personal consumption expenditures') {
					pce.push(componentArray[i+2]);
				};
			};

$(function () {
			var pce=[];
			for(var i=0; i<dataArray.length; i++){
				if (componentArray[i] === 'Personal consumption expenditures') {
					pce.push(componentArray[i+2]);
					pce[i].replaceAll(",", "");

				};

			};

			//Pseudo Code: Replace all commas with nothing. Then parseInt to turn
			// elements of the array into numbers so HighCharts can read the PCE data!

			// Change pce array from strings to integers
			//pce = pce.map();
			/*var pce2 = [];
			for (var i = 0;i < pce.length; i++) {
				pce2[i] = parseInt(pce[i]);
			}
			*/
			alert(pce);

			/*var pce1 = pce.map(function(element){
				 console.log(element);
			})
			alert(pce1);
			*/

    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'How does U.S Census Bureau data fit into the Bureau of Economic Analysis GDP Calculation?'
        },
        subtitle: {
            text: 'Sources: Census.gov and Bea.gov'
        },
        xAxis: {
            categories: ['2014Q1', '2014Q2', '2014Q3', '2014Q4'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions (Real 2009 Chained U.S Dollars)'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Consumption Expenditures',
            data: pce
        }, {
            name: 'Gross Private Domestic Investment',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Net Exports of Goods and Services',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'Government Consumption and Gross Investment',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }]
    });
});


			
			
		});
		function api_test () {
};

//Stacked Area Chart from High Charts

 



	
});