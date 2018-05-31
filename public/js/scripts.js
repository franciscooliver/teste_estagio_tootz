$(document).ready(function(){

    $("#navbar-mobile").toggle();

    $("#btn_collapse").click( function () {
        $('#navbar-mobile').toggle();
    });

    //$('.sidenav').sidenav();
    $(function() {
        $('.myslide').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            prevArrow: '<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',
            nextArrow: '<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i></div>'

        });
    });

    $(function() {
        $('.myslide2').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',
            nextArrow: '<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i></div>'

        });
    });
    //slide
    $('.slider').slider();

    $('.carousel').carousel();

    $('.navbar-toggle').click(function(){
        $('#nav-collapse-mobile').toggle();
    });


});
