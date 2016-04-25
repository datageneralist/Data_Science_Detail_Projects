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
var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&ShowMillionsID=N&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";

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

	var data = {
		'GDP': {
			'Personal Consumption Expenditures': {
				'Goods': {
					'Durable Goods': durable_goods[0],
					'Nondurable Goods': nondurable_goods[0]
				},
				'Consumption: Services': c_services[0]
			},
			'Private Investment': {
				'Fixed Investment': {
					'Residential': residential[0],
					'Non Residential': {
						'Structures': structures[0],
						'Equipment': equipment[0],
						'IP_software': IP_software[0]
					}
				},
				'Change in Private Inventories': change_privateinv[0],
			},
			'Net Exports': {
				'Exports': {
					'Exports: Goods': ex_goods[0],
					'Exports: Services': ex_services[0]
				},
				'Imports': {
					'Imports: Goods': im_goods[0],
					'Imports: Services': im_services[0]		
				}
			},
			'Govt Spending':{
				'Federal': {
					'National Defense': national_defense[0],
					'Non Defense': non_defense[0]
				},
				'State and Local': state_local[0]
			}
		},
	},
	points = [],
	level_1,
	level_2,
	level_3,
	level_1P,
	level_2P,
	level_3P,
	level_4P,
	level_1I = 0,
	level_2I,
	level_3I,
	level_4I

for (level_1 in data) {
        if (data.hasOwnProperty(level_1)) {
            level_1P = {
                id: 'id_' + level_1I,
                name: level_1,
                color: Highcharts.getOptions().colors[level_1I]

            };
            level_2I = 0;
            for (level_2 in data[level_1]) {
                if (data[level_1].hasOwnProperty(level_2)) {
                    level_2P = {
                        id: level_1P.id + '_' + level_2I,
                        name: level_2,
                        parent: level_1P.id,
 	                    color: Highcharts.getOptions().colors[level_2I]

                    };
                    points.push(level_2P);
                    level_3I = 0;
                    for (level_3 in data[level_1][level_2]) {
                        if (data[level_1][level_2].hasOwnProperty(level_3)) {
                            level_3P = {
                                id: level_2P.id + '_' + level_3I,
                                name: level_3,
                                parent: level_2P.id,
                                color: Highcharts.getOptions().colors[level_3I]
                            };
                            points.push(level_3P);
                		
                		level_4I = 0;               
                    	for (level_4 in data[level_1][level_2][level_3]) {
                    		if (data[level_1][level_2][level_3].hasOwnProperty(level_4)) {
                            	level_4P = {
                                	id: level_3P.id + '_' + level_4I,
                                	name: level_4,
                                	parent: level_3P.id,
                                	color: Highcharts.getOptions().colors[level_4I]
                            	};
                            	points.push(level_4P);

                            level_5I = 0;
                    		for (level_5 in data[level_1][level_2][level_3][level_4]) {
                    			if (data[level_1][level_2][level_3][level_4].hasOwnProperty(level_5)) {
                            		level_5P = {
                                		id: level_4P.id + '_' + level_5I,
                                		name: level_5,
                                		parent: level_4P.id,
                                		color: Highcharts.getOptions().colors[level_5I]
                            		};
                            		points.push(level_5P);
                            		level_5I += 1;
                        		} //if level 5 
                         		if (data[level_1][level_2][level_3][level_4][level_5] > 0) {
                 				level_5P.value = data[level_1][level_2][level_3][level_4][level_5];
                        		}
                    		} //for level 5

                            	level_4I += 1;
                        	} //if level 4 
                         	if (data[level_1][level_2][level_3][level_4] > 0) {
                 			level_4P.value = data[level_1][level_2][level_3][level_4];
                        	}
                    	} //for level 4


                    	level_3I +=1;
                		} //if level 3 
                	 	if (data[level_1][level_2][level_3] > 0) {
                 		level_3P.value = data[level_1][level_2][level_3];
                     	}
                     } //for level 3
                    level_2I += 1;
                } //if level 2
                if (data[level_1][level_2] > 0) {
                 level_2P.value = data[level_1][level_2];
                        }
                if (data[level_1][level_2] == 'Net Exports') {
                	alert("yes!");
                	level_2P.value = net_exports[0];
                }

            } //for level 2
            points.push(level_1P);
            level_1I += 1;
            
        }/*
        for (var i = 0; i < data[0].length, i++) {
        	for (var j = 0; data[level_1][level_2].length)
        	level_1P[i].value = data[level_1][level_2][i];
        }*/
    }
	

   	//data['GDP']['Net Exports'].value = net_exports[0];

    $('#tree_map').highcharts({
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            //layout options: sliceAndDice, stripes, squarified or strip
            alternateStartingDirection: true,
            allowDrillToNode: true,
            animationLimit: 1000,
            levelIsConstant: false,
            dataLabels: {
            	enabled: true,
            },
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }
                }
            }],

            data: points

            }],

        //}],
        /*drilldown: [{
        		id: 'goods_services',
        		name: 'Goods and Services',
        		parent: 'pce',
       			data: [6
       				//['Goods', goods[0]],
       				//['Services', c_services[0]]
       				]



        }],*/
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



