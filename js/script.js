
$(document).on('pageinit', function() {

    $.mobile.toolbar.prototype.options.backBtnText = "retour";
    $.mobile.toolbar.prototype.options.addBackBtn = true;


});

$(document).on( "pagebeforeshow", function( event ) {
    $.getJSON('checklists.json', function (json) {
        filledListview(json);
    });
    $id = getUrlParameter("id");
} );


function filledListview(json) {
    $("#indexListview").html('');
    $.each(json, function (i, id) {
        $('#indexListview').append(
            '<li><a href="view.html?id='+i+'" data-transition="slidefade">'+ id.name +'</a>'+
            '<a href="form.html?id='+i+'" data-icon="gear" data-transition="slidefade">Modifier la checklist</a>'+
            '</li>'
        );
        console.log(id.name);
    });
    $("#indexListview").listview("refresh");

    console.log(getUrlParameter("id"));
}

var getUrlParameter = function(paramName) {
    var urlParams = window.location.href.split('?')[1];
    console.log(urlParams);
    if (urlParams) {
        var params = urlParams.split('&');

        for (var i = 0; i <  params.length; i++) {
            var param = params[i].split('=');
            if (param[0] == paramName)
                return param[1];
        }
    }
}
