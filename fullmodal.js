$(document).ready(function(){

    $(".fullmodal-modal").hide();

    $(".fullmodal").click(function(e){
        e.preventDefault();
        var modal = $(this).attr("data-modal");
        var url = $(this).attr("data-url");
        $("#"+modal).load(url, function(){
                $(".fullmodal-close").click(function(e){
                    e.preventDefault();
                    //alert($(this).html());
                    var parent = $(this).closest("div").attr("id");
                    //alert(parent);
                    $("#"+parent).fadeOut('slow');
                })
        })
        $("#"+modal).fadeIn('slow');
    })

})