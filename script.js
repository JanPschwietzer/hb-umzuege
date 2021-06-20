if (window.innerWidth > 800) {
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
} else {
    $(document).ready(function() {
        $("#desktopOnly").css("visibility", "hidden");
        $("#desktopOnly").css("height", "5px");
    });
}