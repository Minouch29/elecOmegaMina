console.log("js fonctionne");

$(document).ready(function(){   
     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $("#b2").click(function(){
        $("ul.list").hide();
    });
    
    //Dès qu'on clique sur #b1, on applique show() au titre
    $("#b1").click(function(){
        $("ul.list").show();
    });
});



