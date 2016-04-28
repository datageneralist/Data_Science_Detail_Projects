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

			var gdp = [];
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
			
			SeriesCode(gdp, 'A191RC');
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



/*
			
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
                	//formatter: function () {
                    	//return this.value;
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

*/


// Tree Map

$(function () {
/* //Complicated Tree Map Code
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
					//data.GDP['Net Exports'].value = 1000;
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



            } //for level 2
            points.push(level_1P);
            level_1I += 1;

            
        }
    }
*/

    $('#tree_map').highcharts({
    	colorAxis: {
    		/*stops: [
    			[0, '#ff0000'],
    			[0.3, '#78ff6c'],
    			[0.5, '#11d000']
    		],
    		   	min: -3000
			*/
    		minColor: '#ff0000',
    		maxColor: Highcharts.getOptions().colors[0]
    		/*dataClasses: [{
    			color: '#ff0000',
    			from: -3000,
    			to: -1
    		},
    		{
    			color: '#78ff6c',
    			from: 0,
    			to: 100
    		},
    		{
    			color: '#15ff00',
    			from: 100.01,
    			to: 300
    		},
    		{
    			color: '#11d000',
    			from: 300.01,
    			to: 500
    		},
    		{
    			color: '#0d9f00',
    			from: 500.01,
    			to: 1000
    		}];*/
    	},
        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            //layout options: sliceAndDice, stripes, squarified or strip
            alternateStartingDirection: true,
            allowDrillToNode: true,
            animationLimit: 1000,
            levelIsConstant: false,
            dataLabels: {
            	enabled: false,
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

            //data: points
            data: [{
            	id: 'GDP',
            	name: 'GDP',
            	value: gdp[0],
            	colorValue: 1
            	},            	
            	{
            	id: 'PCE',
            	name: 'PCE',
            	parent: 'GDP',
            	value: pce[0],
            	colorValue: 2
            	},
            	{
            	id: 'Goods',
            	name: 'Goods',
            	parent: 'PCE',
            	value: goods[0],
            	colorValue: 3		
            	},
            	{
            		id: 'Services',
            		name: 'Services',
            		parent: 'PCE',
            		value: c_services[0],
            		colorValue: 4
            	},
            	{
            		id: 'Durable_Goods',
            		name: 'Durable Goods',
            		parent: 'Goods',
            		value: durable_goods[0],
            		colorValue: 5		

            	},
            	{
            		id: 'Nondurable_Goods',
            		name: 'Nondurable Goods',
            		parent: 'Goods',
            		value: nondurable_goods[0],
            		colorValue: 6
            	},
            	{
            		id: 'Private_Investment',
            		name: 'Private Investment',
            		parent: 'GDP',
            		value: private_investment[0],
            		colorValue: 7
            	},
            	{
            		id: 'Fixed_Investment',
            		name: 'Fixed Investment',
            		parent: 'Private_Investment',
            		value: fixed_investment[0],
            		colorValue: 8
            	},
            	{
            		id: 'Change_In_Private_Inventories',
            		name: 'Change in Private Inventories',
            		parent: 'Private_Investment',
            		value: change_privateinv[0],
            		colorValue: 9
            	},
            	{
            		id: 'Nonresidential_Investment',
            		name: 'Nonresidential Investment',
            		parent: 'Fixed_Investment',
            		value: nonres_investment[0],
            		colorValue: 10
            	},
            	{
            		id: 'Residential_Investment',
            		name: 'Residential Investment',
            		parent: 'Fixed_Investment',
            		value: residential[0],
            		colorValue: 9
            	},
            	{
            		id: 'Structures',
            		name: 'Structures',
            		parent: 'Nonresidential_Investment',
            		value: structures[0],
            		colorValue: 8
            	},
            	{
            		id: 'Equipment',
            		name: 'Equipment',
            		parent: 'Nonresidential_Investment',
            		value: equipment[0],
            		colorValue: 7
            	},
            	{
            		id: 'IP_software',
            		name: 'IP Software',
            		parent: 'Nonresidential_Investment',
            		value: IP_software[0],
            		colorValue: 6
            	},
            	{
            		id: 'Net_Exports',
            		name: 'Net Exports',
            		parent: 'GDP',
            		value: net_exports[0],
            		colorValue: 5
            	},
            	{
            		id: 'Exports',
            		name: 'Exports',
            		parent: 'Net_Exports',
            		value: trade_exports[0],
            		colorValue: 4
            	},
            	{
            		id: 'Imports',
            		name: 'Imports',
            		parent: 'Net_Exports',
            		value: trade_imports[0],
            		colorValue: 3
            	},
            	{
            		id: 'Ex_Goods',
            		name: 'Exports: Goods',
            		parent: 'Exports',
            		value: ex_goods[0],
            		colorValue: 2
            	},
            	{
            		id: 'Ex_Services',
            		name: 'Exports: Services',
            		parent: 'Exports',
            		value: ex_services[0],
            		colorValue: 1
            	},
            	{
            		id: 'Im_Goods',
            		name: 'Imports: Goods',
            		parent: 'Imports',
            		value: im_goods[0],
            		colorValue: 2
            	},
            	{
            		id: 'Im_Services',
            		name: 'Imports: Services',
            		parent: 'Imports',
            		value: im_services[0],
            		colorValue: 2
            	},
            	{
            		id: 'Govt_spending',
            		name: 'Government Spending',
            		parent: 'GDP',
            		value: govt_spending[0],
            		colorValue: 4
            	},
            	{
            		id: 'Federal',
            		name: 'Federal',
            		parent: 'Govt_spending',
            		value: federal[0],
            		colorValue: 3
            	},
            	{
            		id: 'State_Local',
            		name: 'State and Local',
            		parent: 'Govt_spending',
            		value: state_local[0],
            		colorValue: 2
            	},
            	{
            		id: 'National_Defense',
            		name: 'National Defense',
            		parent: 'Federal',
            		value: national_defense[0],
            		colorValue: 2
            	},
            	{
            		id: 'Non_Defense',
            		name: 'Non Defense',
            		parent: 'Federal',
            		value: non_defense[0],
            		colorValue: 2
            	},
            	{
            		id: 'Test1',
            		name: 'Test 1',
            		parent: 'Durable_Goods',
            		value: 25+'%'            		
            	},
            	{
            		id: 'Test_2',
            		name: 'Test 2',
            		parent: 'Durable_Goods',
            		value: 25
            	}


            ],

        }],

        title: {
            text: 'How does U.S Census Bureau data fit into the Bureau of Economic Analysis GDP Calculation?'
        }
    }); //tree map high charts close

		//Stacked Bar CHart With Drilldown



});		//function close



		function api_test () {
		};

//Stacked Area Chart from High Charts
   		 $('#stacked_bar').highcharts({
   		 	
		}

 
});

});



