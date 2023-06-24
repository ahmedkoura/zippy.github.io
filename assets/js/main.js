(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       

       
              
        $(".brand-slider").owlCarousel({
            items:5,
            nav:true,
            dot: false,
            navText: ['<i class="far fa-chevron-double-left"></i>','<i class="far fa-chevron-double-right"></i>'],
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:4,
                   
                },
                1000:{
                    items:5,
                   
                }
            }
            
          
        });

             
 //  offcanvas-menu

        //    click-action
        $(".header__bar").on("click", function () {
            $(".offcanva, .overlay").addClass("active");
            return false;
        });

        $(".cross").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".offcanva, .overlay").removeClass("active");
        });


    });


    jQuery(window).load(function(){


    });


}(jQuery));	