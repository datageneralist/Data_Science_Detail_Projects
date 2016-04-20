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
var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&ShowMillionsID=Y&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";

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
				$('body').append('<p>'+componentArray[i]+componentArray[i+1]+" "+componentArray[i+2]+'</p>');

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
			var equipment = [];
			var IP_software = [];
			var residential = [];
			var change_privateinv = [];
			var net_exports = [];
			var trade_exports = [];
			var ex_goods = [];
			var ex_services = [];
			var trade_imports = [];
			var im_goods = [];
			var im_services = [];
			var govt_spending = [];
			var federal = [];
			var national_defense = [];
			var non_defense = [];
			var state_local = [];

			var SeriesCode = function(array, code) {
				for(var i=0; i<componentArray.length; i++) {
					if (componentArray[i] === code) {
					componentArray[i+2] = componentArray[i+2].replace(/\,/g, "");
					array.push(componentArray[i+2]);
					}
				};
				for (var i = 0; i < array.length; i++) {
            		array[i] = parseFloat(array[i]);
				};
			};
			
			SeriesCode(pce, 'DPCERC');
			SeriesCode(goods, 'DGDSRC');
			SeriesCode(durable_goods, 'DDURRC');
			SeriesCode(nondurable_goods, 'DNDGRC');
			SeriesCode(c_services, 'DSERRC');
			SeriesCode(private_investment, 'A006RC');
			SeriesCode(fixed_investment, 'A007RC');
			SeriesCode(nonres_investment, 'A008RC');
			SeriesCode(structures, 'B009RC');
			SeriesCode(equipment, 'Y033RC');
			SeriesCode(IP_software, 'Y001RC');
			SeriesCode(residential, 'A011RC');
			SeriesCode(change_privateinv, 'A014RC');
			SeriesCode(net_exports, 'A019RC');
			SeriesCode(trade_exports, 'B020RC');
			SeriesCode(ex_goods, 'A253RC');
			SeriesCode(ex_services, 'A646RC');
			SeriesCode(trade_imports, 'B021RC');
			SeriesCode(im_goods, 'A255RC');
			SeriesCode(im_services, 'B656RC');
			SeriesCode(govt_spending, 'A822RC');
			SeriesCode(federal, 'A823RC');
			SeriesCode(national_defense, 'A824RC');
			SeriesCode(non_defense, 'A825RC');
			SeriesCode(state_local, 'A829RC');


			
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
            		name: 'Personal Consumption Expenditures',
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
            		name: 'Equipment',
            		data: equipment,
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
                //id: 'pce',
                name: 'Personal Consumption Expenditures',
                //color: "#EC2500",
                //allowDrillToNode: true,
                value: pce[0],
                drilldown: 'goods_services'
            }, {
                id: 'private_investment',
                name: 'Gross Domestic Private Investment',
                color: "#ECE100"
                //allowDrillToNode: true
            }/*, {
                name: 'Services',
                parent: 'pce',
                value: c_services[0]
            }, {
                name: 'Fixed Investment',
                parent: 'private_investment',
                value: fixed_investment[0]
            }, {
                name: 'Change in Private Inventories',
                parent: 'private_investment',
                value: change_privateinv[0]
            }*/]
        }],
        drilldown: [{
        		id: 'goods_services',
        		name: 'Goods and Services',
        		//parent: 'pce',
       			data: [6
       				//['Goods', goods[0]],
       				//['Services', c_services[0]]
       				]



        }],
        title: {
            text: 'How does U.S Census Bureau data fit into the Bureau of Economic Analysis GDP Calculation?'
        }
    });
});		

		//var chart = $('#container').highcharts;


		function api_test () {
		};

//Stacked Area Chart from High Charts

 
});

});



