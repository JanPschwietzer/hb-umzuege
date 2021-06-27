if (window.innerWidth <= 1100) {
    $(document).ready(function() {
        $("#desktopOnly").css("visibility", "hidden");
        $("#desktopOnly").css("height", "5px");
        $("#header-nav").css("position", "relative");
        $("#header-nav").css("height", "100px");
    });
} else {
    $(document).ready(function() {
        $("#header-nav").css("position", "fixed");
        $("#header-nav").css("top", "0px"); 
        $("#header-nav").css("height", "100px");
    });
}

$(window).scroll(function() {
    if (window.innerWidth > 1100) {
        let height = $(window).scrollTop();
        let main = $("main").height();
    
        console.log(height);
        console.log(main);
    
        if (height >= main - 89) {
            $("#header-nav").css("position", "absolute");
            $("#header-nav").css("top", main - 90 + "px");
        } else {
            $("#header-nav").css("position", "fixed");
            $("#header-nav").css("top", "0px"); 
            $("#header-nav").css("height", "100px");
        }
    }
});

function arrowClick() {
    $(document).ready(function() {
        $("html, body").animate({
            scrollTop: $("main").get(0).scrollHeight - 90
        }, 1000);
    })
}

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