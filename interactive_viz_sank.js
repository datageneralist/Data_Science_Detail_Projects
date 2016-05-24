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



var link_value = function(source_array, target_array, quarter) {
  //console.log(source_array);
  //console.log(trade_exports);
  if (JSON.stringify(source_array) == JSON.stringify(trade_exports)) {
    value = (source_array[quarter-1] / (source_array[quarter-1] + trade_imports[quarter-1])*10);
  }
  else if (JSON.stringify(source_array) == JSON.stringify(trade_imports)) {
    value = (source_array[quarter-1] / (source_array[quarter-1] + trade_exports[quarter-1])*10);
  }
  else if (JSON.stringify(source_array) == JSON.stringify(net_exports)) {
    value = (source_array[quarter-1]*-1 / target_array[quarter-1]*10).toFixed(2);
  }
  else {
  value = Math.round((source_array[quarter-1] / target_array[quarter-1]*10));
  }
  if (value >= 0 && value < 1) {
    value = 1;
    return value;
  }
  else if (value < 0) {
    return Math.floor(value);
  }
  else {
    return value;
  }
};


// Start D3 Sankey utilizing Sankey.js

//Define the Sankey JSON//

//link_value(structures, nonres_investment, 1)
var link_array = [
        /*//Level 6
          {"source": "Census Monthly Retail Survey", "target":"Durable Goods" , "value": 4 },
          {"source": "Other Government Sources", "target": "Durable Goods", "value": 4},
          {"source": "Private/Trade Sources", "target": "Durable Goods", "value": 4},
          {"source": "Bureau of Labor Statistics Price Data", "target": "Durable Goods", "value": 4},
          {"source": "Census Monthly Retail Survey", "target":"Nondurable Goods" , "value": 4 },
          {"source": "Other Government Sources", "target": "Nondurable Goods", "value": 4},
          {"source": "Private/Trade Sources", "target": "Nondurable Goods", "value": 4},
          {"source": "Bureau of Labor Statistics Price Data", "target": "Nondurable Goods", "value": 4},
          {"source": "Census Quarterly Services Survey", "target":"Services Consumed" , "value": 4 },
          {"source": "Other Government Sources", "target": "Services Consumed", "value": 4},
          {"source": "Private/Trade Sources", "target": "Services Consumed", "value": 4},
          {"source": "Bureau of Labor Statistics Price Data", "target": "Services Consumed", "value": 4},          
          {"source": "Census Value of Construction Put in Place", "target": "Structures", "value": 4},
          {"source": "Prices for Single-Family Houses Under Construction", "target": "Structures", "value": 4},
          {"source": "American Petroleum Institute", "target": "Structures", "value": 4},
           {"source": "Census Retail Sales", "target": "Structures", "value": 4},
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },
          {"source": , "target": , "value": },


          {}*/
          //Level 5
          { "source": 'Structures', "target":'Nonresidential Investment', "value": structures[0]/nonres_investment[0]*10},
          { "source":'Equipment', "target":'Nonresidential Investment', "value": link_value(equipment, nonres_investment, 1) },
          { "source":'Intellectual Property', "target":'Nonresidential Investment', "value": link_value(IP_software, nonres_investment, 1)},
          //Level 4
          { "source":'Durable Goods', "target":'Goods Consumed', "value": link_value(durable_goods, goods, 1)},
          { "source":'Nondurable Goods', "target":'Goods Consumed', "value": link_value(nondurable_goods, goods, 1)},
          { "source":'Nonresidential Investment', "target":'Fixed Investment', "value": link_value(nonres_investment, fixed_investment, 1) },
          { "source":'Residential Investment', "target":'Fixed Investment', "value": link_value(residential, fixed_investment, 1)},
          { "source":'Goods Exported', "target":'Exports', "value": link_value(ex_goods, trade_exports, 1) },
          { "source":'Services Exported', "target":'Exports', "value": link_value(ex_services, trade_exports, 1) },
          { "source":'Goods Imported', "target":'Imports', "value": link_value(im_goods, trade_imports, 1) },
          { "source":'Services Imported', "target":'Imports', "value": link_value(im_services, trade_imports, 1) },
          { "source":'National Defense', "target":'Federal', "value": link_value(national_defense, federal, 1) },
          { "source":'Nondefense', "target":'Federal', "value": link_value(non_defense, federal, 1) },
          //Level 3
          { "source":'Goods Consumed', "target":'Personal Consumption Expenditures', "value": link_value(goods, pce, 1)},
          { "source":'Services Consumed', "target":'Personal Consumption Expenditures', "value": link_value(c_services, pce, 1) },
          { "source":'Fixed Investment', "target":'Private Investment', "value": link_value(fixed_investment, private_investment, 1) },
          { "source":'Change in Private Inventories', "target":'Private Investment', "value":link_value(change_privateinv, private_investment, 1) },
          { "source":'Exports', "target":'Net Exports', "value": link_value(trade_exports, "fillin", 1) },
          { "source":'Imports', "target":'Net Exports', "value": link_value(trade_imports, "fillin", 1) },
          { "source":'Federal', "target":'Government Spending', "value": link_value(federal, govt_spending, 1) },
          { "source":'State and Local', "target":'Government Spending', "value": link_value(state_local, govt_spending, 1) },
          //Level 2
          { "source":'Personal Consumption Expenditures', "target":'GDP', "value": link_value(pce, gdp, 1) },
          { "source":'Private Investment', "target":'GDP', "value": link_value(private_investment, gdp, 1)},
          { "source":'Net Exports', "target":'GDP', "value": link_value(net_exports, gdp, 1) },
          { "source":'Government Spending', "target":'GDP', "value": link_value(govt_spending, gdp, 1) }

          ];//ends link array

    var name_array = [
            /*{"name": "Census Monthly Retail Survey"},
            {"name": "Other Government Sources"},
            {"name": "Private/Trade Sources"},
            {"name": "Census Quarterly Services Survey"},
            {"name": "Bureau of Labor Statistics Price Data"},
            {"name": "Census Value of Construction Put in Place"},
            {"name": "Prices for Single-Family Houses Under Construction"},
            {"name": "American Petroleum Institute"},
            {"name": "Census Retail Sales"},
            {"name": },   */         
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
          ]; //ends name array


//Call function inside links array for each element

//D3 Code

var units = "Widgets";
 
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 1200 - margin.left - margin.right,
    height = 740 - margin.top - margin.bottom;
 
var formatNumber = d3.format(",.0f"),    // zero decimal places
    format = function(d) { return formatNumber(d) + " " + units; },
    color = d3.scale.category20();
 
// append the svg canvas to the page
var svg = d3.select("#d3_sankey").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
 
// Set the sankey diagram properties
var sankey = d3.sankey()
    .nodeWidth(36)
    .nodePadding(10)
    .size([width, height]);
 
var path = sankey.link();
 
// load the data
    var graph = {"nodes": name_array, "links": link_array}; 
    var nodeMap = {};
    graph.nodes.forEach(function(x) { nodeMap[x.name] = x; });
    graph.links = graph.links.map(function(x) {
      console.log(x.value);
      return {
        source: nodeMap[x.source],
        target: nodeMap[x.target],
        value: x.value
      };
    });
 
  sankey
      .nodes(graph.nodes)
      .links(graph.links)
      .layout(32);
 
// add in the links
  var link = svg.append("g").selectAll(".link")
      .data(graph.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });
 
// add the link titles
  link.append("title")
        .text(function(d) {
        return d.source.name + " → " + 
                d.target.name + "\n" + format(d.value); });
 
// add in the nodes
  var node = svg.append("g").selectAll(".node")
      .data(graph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
          return "translate(" + d.x + "," + d.y + ")"; })
    .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { 
          this.parentNode.appendChild(this); })
      .on("drag", dragmove));
 
// add the rectangles for the nodes
  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { 
          return d.color = color(d.name.replace(/ .*/, "")); })
      .style("stroke", function(d) { 
          return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { 
          return d.name + "\n" + format(d.value); });
 
// add in the title for the nodes
  node.append("text")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");
 
// the function for moving the nodes
  function dragmove(d) {
    console.log(this);
    d3.select(this).attr("transform", 
        "translate(" + (
               d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
            ) + "," + (
                   d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
            ) + ")");
    sankey.relayout();
    link.attr("d", path);
  }

//Data Table Functionality 

 /* $('#example').DataTable( {
    buttons: [ 'colvis' ],
            "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
    } );

new $.fn.dataTable.Buttons( table, {
    buttons: [
        {
            extend: 'colvis',
            columns: ':gt(0)'
        }
    ]
} ); */

/*Toggle Buttons to disable/enable column visibility 
https://datatables.net/extensions/buttons/

    var table = $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'columnsToggle'
        ],
        "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
    } );
*/

//Create tabs for Data Table


      function api_test () {
    };


}); //done fct

}); //doc ready