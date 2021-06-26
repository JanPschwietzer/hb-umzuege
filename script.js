if (window.innerWidth > 800) {
    let fadeout = "#home";

    $(document).bind("scroll", function() {
        window.scrollTo(0,0); 
    });

    $(document).ready(function() {
        $("body").click(function() {
            jQueryStuff(1000);
        });
        $("body").keydown(function() {
            jQueryStuff(1000);
        });
        $(document).scroll(function() {
            jQueryStuff(500);
        });
    })
} else {
    $(document).ready(function() {
        $("#desktopOnly").css("visibility", "hidden");
        $("#desktopOnly").css("height", "5px");
    });
}

function jQueryStuff(time) {
    $("main").fadeOut(time);
    $(document).unbind("scroll");
    $("img").fadeIn(500);
    $(".opacity1").css("opacity", "0.2");
    $(".opacity2").css("opacity", "0.5");
}

//

let i = 1;

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
    if (i > bilder.length) {
        i = 1;
    }
}