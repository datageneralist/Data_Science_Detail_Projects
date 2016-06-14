//getKey();
//var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&ShowMillionsID=N&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";



// https://datatables.net/reference/option/retrieve
//https://datatables.net/manual/tech-notes/3

$(document).ready(function(){
  
//view-source:http://www.esa.doc.gov/cdac/meeting.html
//$('table').css('visibility', 'collapse');
//$('div:not(.'+'btn-group)').css('visibility', 'hidden');
/*
 
new $.fn.dataTable.Buttons( Dtable, {
    buttons: [
        'csv'
    ]
} );
  
  */


//$('table').hide();
//$('table').DataTable().hide();


function Houdini() {
  //$('table').css('visibility', 'collapse');
  //Hide all tables
  $('table').hide();
};


  $('.btn-group .dropdown-menu a').click( function() {
    //change href to desired id
    //Hide all tables except the one the user clicked
    //Houdini();
    var href = this.href;
    var new_href = href.split('#');
    var myID = new_href[1];
    console.log('#' + myID);
    var type = typeof myID;
    console.log(type);




  var table = $('#' + myID).DataTable( {
        "scrollY": "200px",
        "paginate": false,
        paging: false,
        buttons: [
          'csv'
        ]
    }); 

//https://datatables.net/manual/tech-notes/3

$('.container').children('table').each(function () {
    var table = this.table;
    table.destroy();
});
/*

if ( $.fn.dataTable.isDataTable( '#' + myID ) ) {
    table.destroy();
    table = $('#' + myID).DataTable( {
      "scrollY": "200px",
        "paginate": false,
        paging: false,
        buttons: [
          'csv'
        ],
        retrieve: true
    });
}
else {
    table = $('#' + myID).DataTable( {
      "scrollY": "200px",
        "paginate": false,
        paging: false,
        buttons: [
          'csv'
        ],
        retrieve: true
    });
}

*/
/*$( table.table().node() )
    //.addClass( 'highlight' ),
    //.removeClass('fade');
    .addClass('active'); */
 
/*new $.fn.dataTable.Buttons( table, {
    buttons: [
        'csv'
    ]
} );
 */
 /*table.buttons().container().hide();

table.buttons().container()
    .appendTo( $('.col-sm-6:eq(0)', table.table().container() ));

*/


    //$('#' + myID).show();

    //Add a CSV, PDF, print button 
    //var table1 = 
    //Adds filter and buttons on every click. Need to clear those each click?
/*
    $('#' + myID).DataTable({
      destroy: true,
      dom: 'Bf',
      buttons: [
        'csv'
    ]
  });
*/
    //table.destroy();
    //initTable();
    //table;
    //$('#' + myID).toggle();
    /*
    var table = $('#' + myID).DataTable( {
    buttons: [
        'csv'
    ]
} );
    table.destroy();
    $(this).toggle();
    table.buttons().container()
      .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );
*/

    //$('#' + myID).DataTable('show');

    //$('#' + myID).show();

    //$(table1).show();  


}); //click function




//Create tabs for Data Table using Bootstrap


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






//}); //done fct

}); //doc ready