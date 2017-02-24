$(document).on('pageinit', function() {

    $.mobile.toolbar.prototype.options.backBtnText = "retour";
    $.mobile.toolbar.prototype.options.addBackBtn = true;


});

$(document).on( "pagebeforeshow", function( event ) {
    console.log("pagebeforeshow");
    $.getJSON('checklists.json', function (json) {
        addToListview(json);
    });
} );

function addToListview(json) {
    $("#listview").html('');
    $.each(json, function (i, id) {
        $('#listview').append(
            '<li><a href="view.html" data-transition="slidefade">'+ id.name +'</a>'+
            '<a href="form.html" data-icon="gear" data-transition="slidefade">Modifier la checklist</a>'+
            '</li>'
        );
        console.log(id.name);
    });
    $("#listview").listview("refresh");
}


$(document).on( "hashchange", function( event ) {
    console.log("hashchange");
} );
$(document).on( "mobileinit", function( event ) {
    console.log("mobileinit");
} );
$(document).on( "navigate", function( event ) {
    console.log("navigate");
} );
$(document).on( "orientationchange event", function( event ) {
    console.log("orientationchange event");
} );
$(document).on( "pagebeforechange", function( event ) {
    console.log("pagebeforechange");

} );
$(document).on( "pagebeforehide", function( event ) {
    console.log("pagebeforehide");
} );
$(document).on( "pagebeforeload", function( event ) {
    console.log("pagebeforeload");
} );

$(document).on( "pagechange", function( event ) {
    console.log("pagechange");
} );
$(document).on( "pagebeforecreate", function( event ) {
    console.log("pagebeforecreate avant autre page ");

} );
$(document).on( "pagechangefailed", function( event ) {
    console.log("pagechangefailed");
} );
$(document).on( "pagecreate", function( event ) {
    console.log("pagecreate");

} );
$(document).on( "pagehide", function( event ) {
    console.log("pagehide");
} );
$(document).on( "pageinit", function( event ) {
    console.log("pageinit");
} );
$(document).on( "pageload", function( event ) {
    console.log("pageload");
} );
$(document).on( "pageloadfailed", function( event ) {
    console.log("pageloadfailed");
} );
$(document).on( "pageremove", function( event ) {
    console.log("pageremove");
} );
$(document).on( "pageshow", function( event ) {
    console.log("pageshow");
} );
