$('.owl-carousel').owlCarousel({
    margin: 20,
    navText: ["<i class='fa fa-arrow-left p-2'></i>","<i class='fa fa-arrow-right p-2'></i>"],
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})