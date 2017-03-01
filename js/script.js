$jsonFile = null ;
$id = 0;

$(document).on('pageinit', function() {
    $.mobile.toolbar.prototype.options.backBtnText = "retour";
    $.mobile.toolbar.prototype.options.addBackBtn = true;
});

$(document).on( "pagebeforeshow","#list", function( event ) {
    $taskList = localStorage.getItem("taskList");
    if ($taskList == null){
        $.getJSON('checklists.json', function(json, textStatus) {
            $jsonFile = json ;
            localStorage.setItem("taskList", JSON.stringify($jsonFile));
        });
    }
    else {
        $jsonFile = JSON.parse($taskList);
    }
    filledListview($jsonFile);
} );


$(document).on("pagebeforeshow","#view",function(){
    $id = getUrlParameter("id");
    if($id!= 0) {
        filledTaskList($jsonFile[$id]);
    }
});



$(document).on("pagebeforeshow","#form",function(){
    $id = getUrlParameter("id");
    $numberOfElement = 3 ;
    if($id==0) {
        $("#form .ui-header .ui-title").text("Create new list");
    }
    else{
        $("#form .ui-header .ui-title").text("Edit "+$jsonFile[$id].name );
        // filledFormList( $jsonFile[$id]);
        $list = $jsonFile[$id] ;
        $numberOfElement = $list.tasks.length;
    }
    $content = '';
    $listname = ($id!=0)?$jsonFile[$id].name:'';
    $content += '<input type="text" value="'+$listname+'" placeholder="Nom de la checklist"><br>';

    $content += '<div data-role="controlgroup">';
    for(i=0; i<$numberOfElement; i++){
        $taskname = ($id!=0)?$jsonFile[$id].tasks[i].name:"";
        $content +='<input ame ="task'+i+'" type="text" value="'+$taskname+'" placeholder="Votre tâche">';
    }
    $content += '</div>';
    $('#form #listContent').html($content).trigger('create');

});


function filledListview(json) {
    $("#indexListview").html('');
    $.each(json, function (i, id) {
        $('#indexListview').append(
            '<li><a href="view.html?id='+i+'" data-transition="slidefade">'+ id.name +'</a>'+
            '<a href="form.html?id='+i+'" data-icon="gear" data-transition="slidefade">Modifier la checklist</a>'+
            '</li>'
        );
    });
    $("#indexListview").listview("refresh");
}

function filledTaskList(tasklist){
    $("#view .ui-header .ui-title").text(tasklist.name );
    $list = '<legend>Liste des tâches:</legend>';

    var listetache = tasklist.tasks;
    listetache.forEach( function(element, index) {
        var checked = '';
        if(element.done == true ) {
            checked = 'checked';
        }
        $list +='<input name="checkbox'+index+'" id="checkbox'+index+'" type="checkbox" value="'+index+'" '+checked+' onchange="CheckboxChange()">'+
            '<label for="checkbox'+index+'">'+element.name+'</label>';
    });

    $("#view #tasklist").html($list).trigger('create');
}



var getUrlParameter = function(paramName) {
    var urlParams = window.location.href.split('?')[1];
    if (urlParams) {
        var params = urlParams.split('&');

        for (var i = 0; i <  params.length; i++) {
            var param = params[i].split('=');
            if (param[0] == paramName)
                return param[1];
        }
    }
}

function CheckboxChange(){
    $("#checkbox-v-2a:checked").each(function() {
        $jsonFile[$id].tasks[$(this).val()].done = true ;
    });
    localStorage.setItem("listContent", JSON.stringify($jsonFile));
}

$(document).on("click","#addTask",function(event){
    $nextId = $("#listContent .ui-controlgroup-controls div").length ;
    console.log($nextId);
    $content =$('<input name ="task'+$nextId+'" type="text"  placeholder="Votre tâche">');

    ($content).insertAfter("#listContent .ui-controlgroup-controls div:last-child");
    $("#form #listContent").trigger('create');
});

$(document).on("click","#saveTaskList",function(event){
    console.log("saveTaskList");
});