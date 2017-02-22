var checklists = {
    1: {
        name: 'checklist1',
        tasks : [
            {name: 'Tâche1', done: true},
            {name: 'Tâche2', done: false},
            {name: 'Tâche3', done: false},
        ]
    },
    2: {
        name:'checklist2',
        tasks : [
            {name: 'Tâche1', done: true},
            {name: 'Tâche2', done: false},
            {name: 'Tâche3', done: true},
        ]
    }
}

$(document).on('pageinit', function(){

    $.mobile.toolbar.prototype.options.backBtnText = "retour";
    $.mobile.toolbar.prototype.options.addBackBtn = true;
});

$(document).on( "pagebeforeshow", function( event ) {
    console.log("pagebeforeshow");
} );





$(document).on( "pagebeforecreate", function( event ) {
    console.log("pagebeforecreate avant autre page ");
} );
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
