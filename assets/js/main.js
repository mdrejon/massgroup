(function ($) {
  "use strict";

  jQuery(document).ready(function($){
    // $('.carousel').carousel()
$('.tab-section').skeletabs({
  startIndex: 2
});
// $('.carousel').carousel()
$(".slider").owlCarousel({
      items: 1,
        // margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right''></i>"],
        // responsive : {
        //     0 : {nav: false,},
        //     768 : {nav: true,},
        //     960 : { nav: true,},
        //     1200 : {nav: true,},
        //     1920 : {nav: true,}
        //   }
    });
$(".client-area").owlCarousel({
      items: 5,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: false,
        // animateOut: 'fadeOut',
        // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive : {
            0 : {nav: false,},
            768 : {nav: false,},
            960 : { nav: false,},
            1200 : {nav: false,},
            1920 : {nav: false,}
          }
    });

$(".team").owlCarousel({
      items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        // animateOut: 'fadeOut',
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive : {
            0 : {nav: false, items: 1,},
            768 : {nav: true, items: 2,},
            960 : { nav: true,},
            1200 : {nav: true,},
            1920 : {nav: true,}
          }
    });
$(".testimonial-slider").owlCarousel({
      items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        // navText:false;
        // animateOut: 'fadeOut',
        // navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        // responsive : {
        //     0 : {nav: false,},
        //     768 : {nav: true,},
        //     960 : { nav: true,},
        //     1200 : {nav: true,},
        //     1920 : {nav: true,}
        //   }
    });
$(".project-slider").owlCarousel({
      items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // dots: true,
        // navText:false;
        // animateOut: 'fadeOut',
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        // responsive : {
        //     0 : {nav: false,},
        //     768 : {nav: true,},
        //     960 : { nav: true,},
        //     1200 : {nav: true,},
        //     1920 : {nav: true,}
        //   }
    });
$(".vision-slider").owlCarousel({
      items: 1,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // dots: true,
        // navText:false;
        // animateOut: 'fadeOut',
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        // responsive : {
        //     0 : {nav: false,},
        //     768 : {nav: true,},
        //     960 : { nav: true,},
        //     1200 : {nav: true,},
        //     1920 : {nav: true,}
        //   }
    });
$(".executors-slider").owlCarousel({
      items: 4,
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // dots: true,
        // navText:false;
        // animateOut: 'fadeOut',
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        // responsive : {
        //     0 : {nav: false,},
        //     768 : {nav: true,},
        //     960 : { nav: true,},
        //     1200 : {nav: true,},
        //     1920 : {nav: true,}
        //   }
    });
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         //options here
//         autoScrolling:true,
//         scrollHorizontally: true,
//         lazyLoad: true
//     });

//     //methods
//     $.fn.fullpage.setAllowScrolling(false);
// });
$(window).on('scroll', function(){

          if ($(this).scrollTop() > 100)  {
            $("#header").addClass("sticky wow fadeInDown");

          }else{
            $("#header").removeClass("sticky");
          }
        });
  $('.video-btn').magnificPopup({type:'video'});


  // ============ slick nav ======================================
    $('#mobile-menu').slicknav({
      // prependTo : '.mobile-menu-location'
    });

// Smooth scrolling using jQuery easing

// $(".accordion.active").addClass("fa-caret-right");
//   $(".accordion.active").removeClass("fa-caret-bottom");

        var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        // this.('.porfolio-filter li').removeClass('active')
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


    });

}(jQuery));


jQuery(document).ready(function($){
  $('.porfolio-filter li').on( 'click', function() {
        var filterData = $(this).attr('data-filter');
        
         $('.protfolio-list').isotope({
            
            filter: filterData,
            });
      
          
        $('.porfolio-filter li').removeClass('active');
        $('this').addClass('active');
    
  
});
    $('.protfolio-list').isotope({
        itemSelector: '.single-protfolio',
            percentPosition: true,
             masonry: {
                // use element for option
            columnWidth: '.single-protfolio',
                  horizontalOrder: true,
                 
                }
    });
    
    $('body').perfectScrollbar({
        scroll: true,
    });
    


 
});



$(document).ready(function() {



 // $('#maps')
 //      .gmap3({
 //        center:[22.9434491,91.1204403],
 //        zoom:12,
 //        mapTypeId: "shadeOfGrey", // to select it directly
 //        mapTypeControlOptions: {
 //          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
 //        },
 //        scrollwheel: false
 //      })
 //      .styledmaptype(
 //        "shadeOfGrey",
 //        [
 //          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#9C8B70"},{"lightness":40}]},
 //          //{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#9C8B70"},{"lightness":16}]},
 //          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
 //          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
 //          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#FFFFFF"},{"lightness":17},{"weight":1.2}]},
 //          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
 //          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":21}]},
 //          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ECECEC"},{"lightness":17}]},
 //          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ECECEC"},{"lightness":29},{"weight":0.2}]},
 //          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":18}]},
 //          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":16}]},
 //          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":19}]},
 //          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C8D7D4"},{"lightness":17}]}
 //        ],
 //        {name: "Shades of Grey"}
 //      );

      

});
jQuery(document).ready(function($){
  $('.porfolio-filter li').on( 'click', function() {
        var filterData = $(this).attr('data-filter');
        
         $('.protfolio-list').isotope({
            
            filter: filterData,
            });
      
          
        $('.porfolio-filter li').removeClass('active');
        $('this').addClass('active');
    
  
});
    $('.protfolio-list').isotope({
        itemSelector: '.single-protfolio',
            percentPosition: true,
             masonry: {
                // use element for option
            columnWidth: '.single-protfolio',
                  horizontalOrder: true,
                 
                }
    });
    
    $('body').perfectScrollbar({
        scroll: true,
    });
      
    
    
});