/**
 * Created by tristan on 13/04/17.
 */
$(window).resize(function () {
    $('#content').css("padding-top", $('#header').height()+"px");
});
$(window).ready(function () {
    $('#content').css("padding-top", $('#header').height()+"px");
});
function display_arrow(){
    $('.carousel_left_arrow').css("opacity", "0.4");
    $('.carousel_right_arrow').css("opacity", "0.4");
}

function nodisplay_arrow(){
    $('.carousel_left_arrow').css("opacity", "0");
    $('.carousel_right_arrow').css("opacity", "0");
}

