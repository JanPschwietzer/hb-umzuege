let fadeout = "#home";

$(document).bind("scroll", function() {
    window.scrollTo(0,0); 
});

$(document).ready(function() {
    $("body").click(function() {
        $("main").fadeOut(1000);
        $(document).unbind("scroll");
    });
    $("body").keydown(function() {
        $("main").fadeOut(1000);
        $(document).unbind("scroll");
    });
})