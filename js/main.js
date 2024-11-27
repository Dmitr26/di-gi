// $(function(){

// });

$(document).ready(function () {

    var one = $('#one');
    var two = $('#two');

    one.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        dots: true,
        nav: true
    });

    two.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        dots: true,
        nav: false
    });

});