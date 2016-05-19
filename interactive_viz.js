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

/* Plan: Change Net Exports value to positive. Change tooltip value to negative by adding a prefix.
Color Axis is not working. Assign colors manually? Get started on stacked bar chart w/ drilldown*/
//Display sources for leaf in tooltip? Or anchor tag to another parent-node tree diagram

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
/*
			for (var i=0; i<componentArray.length; i+=3) {
				$('body').append('<p>'+componentArray[i]+componentArray[i+1]+" "+componentArray[i+2]+'</p>');

			};
*/
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



// Tree Map

$(function () {

var Sources = {
	'Net_Exports' : '<br/>' + 'Test 1' + '<br/>' + 'Test 2'
};

$('#tree_map').highcharts({

    	legend: {
                layout: 'vertical',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                //verticalAlign: 'bottom',
                align: 'right',
                x: 0,
                y: -10
            },

    	colorAxis: {
    			minColor: '#ff0000',
    			maxColor: '#1B5E20',
    			stops: [
    			[0, '#ff0000'],
    			[0.3, '#78ff6c'],
    			[0.5, '#4CAF50'],
    			[0.7, '#1B5E20']
    		],
    		   	min: -3000
			
    		//minColor: '#FF0000',
    		//maxColor: '#1B5E20' //Highcharts.getOptions().colors[0]
    		/*dataClassColor: 'category',
    		dataClasses: [{
    			from: -1000,
    			to: -1
    		},
    		{
    			from: 0,
    			to: 2000
    		},
    		{
    			from: 2000.01,
    			to: 3000
    		},
    		{
    			from: 3000.01,
    			to: 5000
    		},
    		{
    			from: 5000.01
    		}]*/
    	},
		tooltip: {
                formatter: function() {
                	//Format Net Exports so it looks negative (Size by absolute value)
                	var tooltip;
                	if (this.point.name === 'Net Exports') {
						tooltip = '-' + this.point.value + ' Billion' + '</br>' + Sources['Net_Exports'] ;
					}
                	else {
                		tooltip = this.point.value + ' Billion';
                	}
                	return tooltip;
            }
        },


        series: [{
            type: "treemap",
            layoutAlgorithm: 'squarified',
            //layout options: sliceAndDice, stripes, squarified or strip
            alternateStartingDirection: true,
            allowDrillToNode: true,
            animationLimit: 1000,
            levelIsConstant: false,
            //colorByPoint: true,
            color: {
            	formatter: function() {
            		if (this.point.value > 1000) {
            			alert('yeah!!!!');
            			this.point.color = '#1B5E20';
            		}
            		else {
            			this.point.color = 'blue';
            		}
            	}
            },
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
                    },
                    useHTML: true,
                    formatter: function() {
                    	if(this.point.name === 'Durable Goods') {
                    		return '<p>' + this.key + ' : Item 1'+', Item 2 </p>'
                    	} else {
                    			return this.key;
                    		}
                    	}
                    }
                //}
            }],
            
            data: [{
            	id: 'GDP',
            	name: 'GDP',
            	value: gdp[0],
            	color: (function() {
            			var new_color;
            			if (this.value > 1000) {
            				alert('yeah');
            				new_color = '#1B5E20';
            				return new_color;
            			}   
            		})
            	//}
            	},            	
            	{
            	id: 'PCE',
            	name: 'PCE',
            	parent: 'GDP',
            	//color: '#43A047',
            	value: pce[0],
            	},
            	{
            	id: 'Goods',
            	name: 'Goods',
            	parent: 'PCE',
            	//color: '#A5D6A7',
            	value: goods[0]
            	},
            	{
            		id: 'Services',
            		name: 'Services',
            		parent: 'PCE',
            		//color: '#81C784',
            		value: c_services[0],
            	},
            	{
            		id: 'Durable_Goods',
            		name: 'Durable Goods',
            		parent: 'Goods',
            		//color: '#C8E6C9',
            		value: durable_goods[0]

            	},
            	{
            		id: 'Nondurable_Goods',
            		name: 'Nondurable Goods',
            		parent: 'Goods',
            		value: nondurable_goods[0]
            	},
            	{
            		id: 'Private_Investment',
            		name: 'Private Investment',
            		parent: 'GDP',
            		value: private_investment[0]
            	},
            	{
            		id: 'Fixed_Investment',
            		name: 'Fixed Investment',
            		parent: 'Private_Investment',
            		value: fixed_investment[0]
            	},
            	{
            		id: 'Change_In_Private_Inventories',
            		name: 'Change in Private Inventories',
            		parent: 'Private_Investment',
            		value: change_privateinv[0]
            	},
            	{
            		id: 'Nonresidential_Investment',
            		name: 'Nonresidential Investment',
            		parent: 'Fixed_Investment',
            		value: nonres_investment[0]
            	},
            	{
            		id: 'Residential_Investment',
            		name: 'Residential Investment',
            		parent: 'Fixed_Investment',
            		value: residential[0]
            	},
            	{
            		id: 'Structures',
            		name: 'Structures',
            		parent: 'Nonresidential_Investment',
            		value: structures[0]
            	},
            	{
            		id: 'Equipment',
            		name: 'Equipment',
            		parent: 'Nonresidential_Investment',
            		value: equipment[0]
            	},
            	{
            		id: 'IP_software',
            		name: 'IP Software',
            		parent: 'Nonresidential_Investment',
            		value: IP_software[0]
            	},
            	{
            		id: 'Net_Exports',
            		name: 'Net Exports',
            		parent: 'GDP',
            		color: '#D50000',
            		value: net_exports[0]*(-1)          	
            	},
            	{
            		id: 'Exports',
            		name: 'Exports',
            		parent: 'Net_Exports',
            		value: trade_exports[0]
            		//color: '#C8E6C9',
            	},
            	{
            		id: 'Imports',
            		name: 'Imports',
            		parent: 'Net_Exports',
            		value: trade_imports[0]
            		//color: '#C8E6C9',
            	},
            	{
            		id: 'Ex_Goods',
            		name: 'Exports: Goods',
            		parent: 'Exports',
            		value: ex_goods[0]
            	},
            	{
            		id: 'Ex_Services',
            		name: 'Exports: Services',
            		parent: 'Exports',
            		value: ex_services[0]
            	},
            	{
            		id: 'Im_Goods',
            		name: 'Imports: Goods',
            		parent: 'Imports',
            		value: im_goods[0]
            	},
            	{
            		id: 'Im_Services',
            		name: 'Imports: Services',
            		parent: 'Imports',
            		value: im_services[0]
            	},
            	{
            		id: 'Govt_spending',
            		name: 'Government Spending',
            		parent: 'GDP',
            		value: govt_spending[0],
            		//colorValue: 3
            	},
            	{
            		id: 'Federal',
            		name: 'Federal',
            		parent: 'Govt_spending',
            		value: federal[0],
            		//colorValue: 3
            	},
            	{
            		id: 'State_Local',
            		name: 'State and Local',
            		parent: 'Govt_spending',
            		value: state_local[0],
            		//colorValue: 3
            	},
            	{
            		id: 'National_Defense',
            		name: 'National Defense',
            		parent: 'Federal',
            		value: national_defense[0],
            		//colorValue: 3
            	},
            	{
            		id: 'Non_Defense',
            		name: 'Non Defense',
            		parent: 'Federal',
            		value: non_defense[0],
            		//colorValue: 3
            	},
            	{
            		id: 'Test1',
            		name: 'Test 1',
            		parent: 'Federal',
            		value: 25,
            		//colorValue: 3           		
            	},
            	{
            		id: 'Test_2',
            		name: 'Test 2',
            		parent: 'Federal',
            		value: 25,
            		//colorValue: 3
            	}


            ],

        }],

        title: {
            text: 'How does U.S Census Bureau data fit into the Bureau of Economic Analysis GDP Calculation?'
        },

        				function() {
            			for (var i = 0; i < series.data.length ; i++)
            			if (series.data[i].value < 1000) {
            				series.data[i].color = '#C8E6C9';
            			}
            			else if (series.data[i].value > 999 && series.data[i].value < 1501) {
            				series.data[i].color = '#81C784';
            			}
            			else if (series.data[i].value > 1500 && series.data[i].value < 2001) {
            				series.data[i].color = '#66BB6A';
            			}
            			else if (series.data[i].value > 2000 && series.data[i].value < 2501) {
            				series.data[i].color = '#4CAF50';
            			}
            			else if (series.data[i].value > 2500 && series.data[i].value < 3501) {
            				series.data[i].color = '#388E3C';
            			}
            			else if (series.data[i].value > 3500) {
            			    series.data[i].color = '#1B5E20';
            			}
            			else {
            				series.data[i].color = 'white';
            			}
            		}

    }); //tree map high charts close



	//function close?



   	});		//function close


//Start Tree Diagram
//Plan: Add anchor at lowest leaf of tree map to link to tree diagram


 google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        //data.addColumn(type: 'string', role: 'Style');
        data.addRows([
        	//Level 5
          [ 'Structures', 'Nonresidential Investment', 1/*, 'color: blue'*/],
          [ 'Equipment', 'Nonresidential Investment', 2 ],
          [ 'Intellectual Property', 'Nonresidential Investment', 1 ],
          //Level 4
          [ 'Durable Goods', 'Goods Consumed', 3 ],
          [ 'Nondurable Goods', 'Goods Consumed', "Value": 3.5 ],
          [ 'Nonresidential Investment', 'Fixed Investment', "Value": 3.5 ],
          [ 'Residential Investment', 'Fixed Investment', 1 ],
          [ 'Goods Exported', 'Exports', 2 ],
          [ 'Services Exported', 'Exports', 1 ],
          [ 'Goods Imported', 'Imports', 3 ],
          [ 'Services Imported', 'Imports', 1 ],
          [ 'National Defense', 'Federal', 1 ],
          [ 'Nondefense', 'Federal', 1 ],
          //Level 3
          [ 'Goods Consumed', 'Personal Consumption Expenditures', "Value": 5.5 ],
          [ 'Services Consumed', 'Personal Consumption Expenditures', 7 ],
          [ 'Fixed Investment', 'Private Investment', 3 ],
          [ 'Change in Private Inventories', 'Private Investment', .5 ],
          [ 'Exports', 'Net Exports', 3 ],
          [ 'Imports', 'Net Exports', 3 ],
          [ 'Federal', 'Government Spending', 2 ],
          [ 'State and Local', 'Government Spending', 2 ],
          //Level 2
          [ 'Personal Consumption Expenditures', 'GDP', 9 ],
          [ 'Private Investment', 'GDP', 5 ],
          [ 'Net Exports', 'GDP', -1 ],
          [ 'Government Spending', 'GDP', 5 ]

        ]);

        //var colors = blue;

        /*function() {

        }*/
        // Sets chart options.
        var options = {
          width: 800,
          sankey: {
          	link: {
          		//colorMode: 'gradient',
          		//colors: colors
        	node: {
        		nodePadding: 5,
        		label: { 
        			fontName: 'Times-Roman',
                         fontSize: 14,
                         color: 'black',
                         bold: true,
                         italic: false 
                     } 
                 } 
             },
         },

        }; //end options

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      } // end function drawchart



// Start D3 Sankey utilizing Sankey.js

//Define the Sankey JSON//

NIPA_Sankey_JSON = {
        "links":
            [
        //Level 5
          { "source":'Structures', "target":'Nonresidential Investment', "value": 1/*, 'color: blue'*/},
          { "source":'Equipment', "target":'Nonresidential Investment', "value": 2 },
          { "source":'Intellectual Property', "target":'Nonresidential Investment', "value": 1 },
          //Level 4
          { "source":'Durable Goods', "target":'Goods Consumed', "value": 3 },
          { "source":'Nondurable Goods', "target":'Goods Consumed', "value": 3.5 },
          { "source":'Nonresidential Investment', "target":'Fixed Investment', "value": 3.5 },
          { "source":'Residential Investment', "target":'Fixed Investment', "value": 1 },
          { "source":'Goods Exported', "target":'Exports', "value": 2 },
          { "source":'Services Exported', "target":'Exports', "value": 1 },
          { "source":'Goods Imported', "target":'Imports', "value": 3 },
          { "source":'Services Imported', "target":'Imports', "value": 1 },
          { "source":'National Defense', "target":'Federal', "value": 1 },
          { "source":'Nondefense', "target":'Federal', "value": 1 },
          //Level 3
          { "source":'Goods Consumed', "target":'Personal Consumption Expenditures', "value": 5.5 },
          { "source":'Services Consumed', "target":'Personal Consumption Expenditures', "value": 7 },
          { "source":'Fixed Investment', "target":'Private Investment', "value": 3 },
          { "source":'Change in Private Inventories', "target":'Private Investment', "value":.5 },
          { "source":'Exports', "target":'Net Exports', "value": 3 },
          { "source":'Imports', "target":'Net Exports', "value": 3 },
          { "source":'Federal', "target":'Government Spending', "value": 2 },
          { "source":'State and Local', "target":'Government Spending', "value": 2 },
          //Level 2
          { "source":'Personal Consumption Expenditures', "target":'GDP', "value": 9 },
          { "source":'Private Investment', "target":'GDP', "value": 5 },
          { "source":'Net Exports', "target":'GDP', "value": -1 },
          { "source":'Government Spending', "target":'GDP', "value": 5 }

          ]//ends link array,
          "nodes": 
          [
            {"name": 'Structures'},
            {"name": 'Equipment'},
            {"name": 'Intellectual Property'},
            {"name": 'Durable Goods'},
            {"name": 'Nondurable Goods'},
            {"name": 'Nonresidential Investment'},
            {"name": 'Residential Investment'},
            {"name": 'Goods Exported'},
            {"name": 'Services Exported'},
            {"name": 'Goods Imported'},
            {"name": 'Services Imported'},
            {"name": 'National Defense'},
            {"name": 'Nondefense'},
            {"name": 'Goods Consumed'},
            {"name": 'Services Consumed'},
            {"name": 'Fixed Investment'},
            {"name": 'Fixed Investment'},
            {"name": 'Change in Private Inventories'},
            {"name": 'Exports'},
            {"name": 'Imports'},
            {"name": 'Federal'},
            {"name": 'State and Local'},
            {"name": 'Personal Consumption Expenditures'},
            {"name": 'Private Investment'},
            {"name": 'Net Exports'},
            {"name": 'Government Spending'},
            {"name": 'GDP'}
          ] //ends nodes array

}// end NIPA Sankey JSON



 		function api_test () {
		};
}); //done function close

}); //document ready close



