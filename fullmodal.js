$(document).ready(function(){

    $(".fullmodal").click(function(e){
        e.preventDefault();
        var modal = $(this).attr("data-modal");
        $("#"+modal).show();
    })

    $(".fullmodal-close").click(function(e){
        e.preventDefault();
        //alert($(this).html());
        var parent = $(this).closest("div").attr("id");
        //alert(parent);
        $("#"+parent).hide();
    })

})