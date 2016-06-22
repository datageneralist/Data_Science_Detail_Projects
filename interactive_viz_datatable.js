//getKey();
//var api_url = "http://www.bea.gov/api/data?&UserID="+user_id+"&method=GetData&DataSetName=NIPA&Year=2014&ShowMillionsID=N&TableID=5&Frequency=Q&ResultFormat=json&jsonp=api_test";



// https://datatables.net/reference/option/retrieve
//https://datatables.net/manual/tech-notes/3
//https://datatables.net/examples/basic_init/multiple_tables.html
//https://datatables.net/examples/api/tabs_and_scrolling.html

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
/*
for (divID =100; divID < 104; divID++) {
    $('#' + divID).hide();
};
*/
//$('table').hide();
//$('table').DataTable().hide();


function Houdini() {
  //$('table').css('visibility', 'collapse');
  //Hide all tables
  $('table').hide();
};

/*
     for (var divID = 100; divID < 104; divID++) {
        $('#' + divID).removeClass('active');
        $('#' + divID).removeClass('hide');
        $('#' + divID).addClass('hide');

     };

*/
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
    //$('#' + myID).show();
      //$(this).parent('div').removeClass('hide');
     //$(this).parent('div').addClass('active');
     /*
     if  $('#' + myID).parent('div').hasClass('hide') {
        $('#' + myID).parent('div').removeClass('hide');
        $('#' + myID).parent('div').addClass('active');
     }
*/
      if ( ! $.fn.DataTable.isDataTable( '#' + myID ) ) {
        $('#' + myID).dataTable( {
          "scrollY": "200px",
        "paginate": false,
        paging: false,
        dom: 'lfBrtip',
        buttons: [
          'csv'
        ]
    });
    }; 


    $('table').not('#' + myID).dataTable().fnDestroy();

    $('table').not('#' + myID).parent('div').removeClass('active');
    $('table').not('#' + myID).parent('div').removeClass('hide');
    $('table').not('#' + myID).parent('div').addClass('hide');

    $('#' + myID).parent('div').removeClass('hide');
    $('#' + myID).parent('div').addClass('active');

/*
    if ($('#' + myID).parent('div').hasClass("active")) {

        $('#' + myID).parent('div').removeClass('hide');

    }
    else {
     $('#' + myID).parent('div').removeClass('hide');
     $('#' + myID).parent('div').addClass('active');

   };
*/
  //var table = $('#' + myID).DataTable();

    //$('#' + myID).dataTable().fnDestroy();

    //$('table').dataTable().fnDestroy();




        //$('div').not('#myid');
        //$('div:not(#myid)');


        //var ID_parent = $('#' + myID).parent('div');
       //table.buttons(0, null).containers().insertAfter(ID_parent);
/*
    var table = $('#' + myID).DataTable( {
      "scrollY": "200px",
        "paginate": false,
        paging: false,
        dom: 'lfBrtip',
        buttons: [
          'csv'
        ]
    });
*/


/*
var tableTools = new $.fn.dataTable.TableTools( table, {
        "buttons": [
            "csv"
        ]
    } );
      
    $( tableTools.fnContainer() ).insertAfter('table');
*/
// "dom": '<"top"i>rt<"bottom"flp><"clear">'
/*
    new $.fn.dataTable.Buttons( table, {
      name: 'commands',
      buttons: [ 'csv']
    } );
 */




 
 

  





    //$(bob).parent('div').show();
    //$('#' + myID).parent('div').show();
    //$(this).parent('div').show();






/*
$('table').each(function () {
    //alert('hello');
    //var table = this.table;
    //alert(this.id);
    tableID = this.id;
    //this.destroy();
    //var table = $('#' + myID).DataTable();
    //var temp = this;
    //temp.destroy();
    var table1 = $('#' + tableID).DataTable();
    table1.destroy();
    table = $('#' + myID).DataTable();
    //$('table1').display();
});
*/
/*
var table = $('#' + myID).DataTable( {
        "scrollY": "200px",
        "paginate": false,
        paging: false,
        buttons: [
          'csv'
        ]
    }); 
*/
//$('table.display').DataTable();

//https://datatables.net/manual/tech-notes/3



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