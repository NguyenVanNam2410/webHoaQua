$('.slider__item').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    // autoplayTimeout: 2000,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.customer__slider').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    // autoplayTimeout: 2000,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$(document).ready(function(){
    $(".product__category--label").click(function(el){
        el.preventDefault();
        var _id = $(this).attr('href');
        console.log(_id);
        $(".product__category--label").removeClass("active");
        $(".products").removeClass("active10");
        $(this).addClass("active");
        $(_id).addClass("active10");
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#arrow").fadeIn();
        }else{
            $("#arrow").fadeOut();
        }
    });
    $("#arrow").click(function(){
        $('html, body').animate({scrollTop : 0},800);
    });

});


document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector(".hi");
    var HeightMenu = menu.offsetTop;
    console.log(HeightMenu);
    console.log(menu);
    var tt_menu = "duoi205";

    window.addEventListener('scroll',function(){
        if(window.pageYOffset > HeightMenu){
            if(tt_menu == 'duoi205'){
                console.log(menu.classList.add('scroll__menu'))
            }
            tt_menu = 'tren205';
        }else if(window.pageYOffset < HeightMenu){
            if(tt_menu == 'tren205'){
                menu.classList.remove('scroll__menu');
            }
            tt_menu = 'duoi205';
        }
    });
});