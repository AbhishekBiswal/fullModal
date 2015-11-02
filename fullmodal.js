$(document).ready(function(){

    $(".fullmodal-modal").hide();

    $(".fullmodal").click(function(e){
        e.preventDefault();
        var modal = $(this).attr("data-modal");
        $("#"+modal).fadeIn('slow');
    })

    $(".fullmodal-close").click(function(e){
        e.preventDefault();
        //alert($(this).html());
        var parent = $(this).closest("div").attr("id");
        //alert(parent);
        $("#"+parent).fadeOut('slow');
    })

})