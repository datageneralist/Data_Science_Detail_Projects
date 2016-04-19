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
    $.ajax({
        url: api_url,
        dataType: 'jsonp',
		jsonpCallback: 'api_test',
		jsonp: 'jsonp',
		}).done(function(response, error) {
			console.log(error);
			var dataArray = response.BEAAPI.Results.Data;
			for (var i=0; i<dataArray.length; i++) {
				var segment = dataArray[i];
				componentArray.push(dataArray[i].SeriesCode, dataArray[i].TimePeriod, dataArray[i].DataValue);

			};

			for (var i=0; i<componentArray.length; i+=3) {
				$('body').append('<p>'+componentArray[i]+" "+componentArray[i+1]+" "+componentArray[i+2]+'</p>');

			};

			var pce = [];
			var goods = [];
			var durable_goods = [];
			var nondurable_goods = [];
			var c_services = [];
			var private_investment = [];
			var fixed_investment = [];
			var nonres_investment = [];
			var structures = [];
			var equip_software = [];

			for(var i=0; i<dataArray.length; i++) {
				
				//Define 2014 data sets based on the Line Description
				// Personal Consumption Expenditures
                if (componentArray[i] === 'DPCERC') {
                    //componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    pce.push(componentArray[i+2]);
                } // Goods
                else if (componentArray[i] === 'DGDSRC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    goods.push(componentArray[i+2]);
                } // Durable Goods
                else if (componentArray[i] === 'DDURRC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    durable_goods.push(componentArray[i+2]);
                } // Nondurable Goods
                else if (componentArray[i] === 'DNDGRC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    nondurable_goods.push(componentArray[i+2]);
                } // Services
                else if (componentArray[i] === 'DSERRC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    c_services.push(componentArray[i+2]);
                } // Gross domestic private investment
                else if (componentArray[i] === 'A006RC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    private_investment.push(componentArray[i+2]);
                } // Fixed Investment
                else if (componentArray[i] === 'A007RC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    fixed_investment.push(componentArray[i+2]);
                }
                else if (componentArray[i] === 'A008RC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    nonres_investment.push(componentArray[i+2]);
                }
                else if (componentArray[i] === 'B009RC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    structures.push(componentArray[i+2]);
                }
                else if (componentArray[i] === 'B010RC') {
                	//componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
                    equip_software.push(componentArray[i+2]);
                };


            };


            //Change Personal Consumption Expenditure Values from Strings to Integers
            for (var i = 0; i < pce.length; i++) {
            	pce[i] = parseFloat(pce[i]);
            	goods[i] = parseFloat(goods[i]);
            	durable_goods[i] = parseFloat(durable_goods[i]);
            	nondurable_goods[i] = parseFloat(nondurable_goods[i]);
            	c_services[i] = parseFloat(c_services[i]);
            	private_investment[i] = parseFloat(private_investment[i]);
            	fixed_investment[i] = parseFloat(fixed_investment[i]);
            	nonres_investment[i] = parseFloat(nonres_investment[i]);
            	structures[i] = parseFloat(structures[i]);
            	equip_software[i] = parseFloat(equip_software[i]);
            	//fixed_investment[i] = parseFloat(fixed_investment[i]);
            };

			
			$(function () {
			
					$('#area_chart').highcharts({
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
                	/*formatter: function () {
                    	return this.value;
               		 	}*/
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
            		data: pce,
            		color: "#ffffff",
            		stacking: null,
            		legendIndex: 3
            		//visible: false
            		//lineColor:
            		
        		}, 		{
            		name: 'Durable Goods',
            		data: durable_goods,
            		color: '#fcfdbb',
            		//lineColor: '#b3c900',
            		index: 8,
            		legendIndex: 0
        		}, 		{
            		name: 'Nondurable Goods',
            		data: nondurable_goods,
            		color: '#feff8d',
            		index: 7,
            		legendIndex: 1
            	},		{
            		name: 'Services',
            		data: c_services,
            		color: '#feff54',
            		lineColor: '#ecee00',
            		index: 6,
            		legendIndex: 2
            	},		{
            		name: 'Gross Domestic Private Investment',
            		data: private_investment,
            		index: 5,
            		legendIndex: 8
            	},		{
            		name: 'Fixed Investment',
            		data: fixed_investment,
            		index: 4,
            		legendIndex: 7
            	},		{
            		name: 'Nonresidential Investment',
            		data: nonres_investment,
            		index: 3,
            		legendIndex: 6
            	},		{
            		name: 'Structures',
            		data: structures,
            		index: 2,
            		legendIndex: 4
            	},		{
            		name: 'Equipment and Software',
            		data: equip_software,
            		index: 1,
            		legendIndex: 5
        	}]
   		 });
	
	});

				// Tree Map

				$(function () {
    $('#tree_map').highcharts({
        series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: [{
                id: 'A',
                name: 'Apples',
                color: "#EC2500"
            }, {
                id: 'B',
                name: 'Bananas',
                color: "#ECE100"
            }, {
                id: 'O',
                name: 'Oranges',
                color: '#EC9800'
            }, {
                name: 'Anne',
                parent: 'A',
                value: 5
            }, {
                name: 'Rick',
                parent: 'A',
                value: 3
            }, {
                name: 'Peter',
                parent: 'A',
                value: 4
            }, {
                name: 'Anne',
                parent: 'B',
                value: 4
            }, {
                name: 'Rick',
                parent: 'B',
                value: 10
            }, {
                name: 'Peter',
                parent: 'B',
                value: 1
            }, {
                name: 'Anne',
                parent: 'O',
                value: 1
            }, {
                name: 'Rick',
                parent: 'O',
                value: 3
            }, {
                name: 'Peter',
                parent: 'O',
                value: 3
            }, {
                name: 'Susanne',
                parent: 'Kiwi',
                value: 2,
                color: '#9EDE00'
            }]
        }],
        title: {
            text: 'Fruit consumption'
        }
    });
});		

		//var chart = $('#container').highcharts;


		function api_test () {
		};

//Stacked Area Chart from High Charts

 
});

});



