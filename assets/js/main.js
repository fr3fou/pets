$(document).ready(function () {
    $('#goToHome').click(function () {
        $('html, body').animate({
            scrollTop: $("#henlo").offset().top
        }, 500);
    });
    $('#goToGallery').click(function () {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 500);
    });
    $('#goToContact').click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });
    $('#goToAbout').click(function () {
        window.location.href="https://fr3fou.ml";
    });
    $('#backarrow').click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 500);
    });
});