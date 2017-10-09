(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        	 $('.homepage-slides').owlCarousel({
                items:1,
                loop:true,
                autoplay:true,
                dots:true
            });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	