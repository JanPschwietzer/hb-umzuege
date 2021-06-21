if (window.innerWidth > 800) {
    let fadeout = "#home";

    $(document).bind("scroll", function() {
        window.scrollTo(0,0); 
    });

    $(document).ready(function() {
        $("body").click(function() {
            $("main").fadeOut(1000);
            $(document).unbind("scroll");
            $("img").fadeIn(500);
            $(".opacity1").css("opacity", "0.2");
            $(".opacity2").css("opacity", "0.5");
        });
        $("body").keydown(function() {
            $("main").fadeOut(1000);
            $(document).unbind("scroll");
            $("img").fadeIn(500);
            $(".opacity1").css("opacity", "0.2");
            $(".opacity2").css("opacity", "0.5");
        });
        $(document).scroll(function() {
            $("main").fadeOut(500);
            $(document).unbind("scroll");
            $("img").fadeIn(500);
            $(".opacity1").css("opacity", "0.2");
            $(".opacity2").css("opacity", "0.5");
        });
    })
} else {
    $(document).ready(function() {
        $("#desktopOnly").css("visibility", "hidden");
        $("#desktopOnly").css("height", "5px");
    });
}

let i = 2;

function bilderRight() {
    const bilder = ["images/bild1.jpg", "images/bild2.jpg", "images/bild3.jpg", "images/bild4.jpg", "images/bild5.jpg"];

    const webseite = document.getElementsByClassName("instagram");

    let j = i;

    for (let element of webseite) {
        if (j < bilder.length) {
            element.setAttribute("src", bilder[j]);
        } else {
            j = 0;
            element.setAttribute("src", bilder[j]);
        }
        j++;
    }
    i++;
    if (i >= 6) {
        i = 1;
    }
}