//getKey();
//var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&ShowMillionsID=N&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";

$(document).ready(function(){
  
//view-source:http://www.esa.doc.gov/cdac/meeting.html
//change IDs and classes for a tags and lis
//http://stackoverflow.com/questions/1535331/how-to-hide-all-elements-except-one-using-jquery
//https://api.jquery.com/visible-selector/
//$('table').css('visibility', 'collapse');
//$('div:not(.'+'btn-group)').css('visibility', 'hidden');
$('table').hide();
function Houdini() {
  //$('table').css('visibility', 'collapse');
  $('table').hide();
};

  $('.btn-group .dropdown-menu a').click( function() {
    //change href to desired id
    Houdini();
    var href = this.href;
    var new_href = href.split('#');
    var myID = new_href[1];
    console.log(myID);
    //Class/id attempt method
    //var myDiv = this.id;
    //console.log(myDiv);
    //$('table:not(#'+myDiv+')').hide();
    //$('#'+ this.id).css('visibility', 'visible');
    //$("'" + '.'+ this.id + "'").css('visibility', 'visible');
    //$('#'+ this.id).addClass( "active" );

   //$("table").hide();
   //var myDiv = this.id;
   //$('#myDiv').appendTo('body');
  //console.log(this.id);
  //console.log('somethign click');
  //$('div:not(.' + this.id +')').css('visibility', 'hidden');
  //$('#' + myID).css('visibility', 'visible');
  //makeTablesDisappear();
  //$('#' + myID).removeClass( "fade" );
  //$('#' + myID).css('visibility', 'visible');
  $('#' + myID).show();
});


//Data Table Functionality 

//Old code to create tabs from Datatables.net

  /*
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        //$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();

    } );

*/

//Create tabs for Data Table using Bootstrap

/*
    $(".btn-group a").click(function(){
        $(this).btn('show');
    });
    $('.btn-group a').on('show.bs.dropdown', function(){
        //alert('The new tab is about to be shown.');
    });
    $('.btn-group a').on('shown.bs.dropdown', function(){
        //alert('The new tab is now fully shown.');
    });
    $('.btn-group a').on('hide.bs.dropdown', function(e){
        //alert('The previous tab is about to be hidden.');
    });
    $('.btn-group a').on('hidden.bs.dropdown', function(){
        //alert('The previous tab is now fully hidden.');
    });
*///dropdown as object
//$('.nav-tabs').button()
/*
    $(".btn-group").click(function(){
        $(this).button('show');
    });

*//*
$('btn-group').click(function () {
  $(this).show();
});
*/
//Hide all containers and show only one based on
// individual ID
//Future: 

/*
      $(".btn-group a").click(function(){
         this.button('show');
      });

*/
 //$(".dropdown-toggle").dropdown();
/* Move li inside a tag. COnsole.log this href on that li.
btn group dropdown-menu li is reference. This.href  

$('#Govt_3').click(function(e) {
    alert('alerted');
    e.preventDefault();// prevent the default anchor functionality

});


//This is default functionality (I think)
/*
    $('.btn-group').on('show.bs.dropdown', function(){
      alert('show dropdown');
    });
    $('.btn-group').on('shown.bs.dropdown', function(){
      alert('dropdown shown');
    });
    $('.btn-group').on('hide.bs.dropdown', function(e){
      alert('hide dropdown');
    });
    $('.btn-group').on('hidden.bs.dropdown', function(){
      alert('it is hidden');
    });
*/
/*
    //$('.container').hide();
    $('.btn-group button').click(function(){
        var target = "#" + $(this).data("target");
        $(".container").not(target).hide();
        $(target).show();
    });
*/


/*

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

*/

//}); //done fct

}); //doc ready