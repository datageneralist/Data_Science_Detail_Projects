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

//Insert Sankey Code





//Data Table Functionality 

//Old code to create tabs from Datatables.net

  /*
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        //$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();

    } );

*/

//Create tabs for Data Table using Bootstrap


    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
    $('.nav-tabs a').on('show.bs.tab', function(){
        //alert('The new tab is about to be shown.');
    });
    $('.nav-tabs a').on('shown.bs.tab', function(){
        //alert('The new tab is now fully shown.');
    });
    $('.nav-tabs a').on('hide.bs.tab', function(e){
        //alert('The previous tab is about to be hidden.');
    });
    $('.nav-tabs a').on('hidden.bs.tab', function(){
        //alert('The previous tab is now fully hidden.');
    });





    $('table.table').DataTable( {
        //ajax:           '../ajax/data/arrays.txt',
        dom: 'Bfrtip',
        buttons: [
            'colvis','copy', 'csv'//, 'print', 'pdf','columnsToggle',
        ],
        //buttons: true,
        scrollY:        200,
        scrollCollapse: true,
        paging:         false
    } );
 
    // Apply a search to the second table for the demo
    //$('#example2').DataTable().search( 'New York' ).draw();



}); //done fct

}); //doc ready