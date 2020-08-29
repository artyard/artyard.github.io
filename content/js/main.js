/**
* Template Name: Gp - v2.0.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  
  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

       

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
           $('.nav-menu .active, .mobile-nav').removeClass('active');
           $(this).closest('li').addClass('active');
        }
        // setTimeout(()=>{
        //   $(this).closest('li').addClass('active');
        //   console.log($(this).closest('li'))
        // },500)

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		
    if(isMobile){
      var cur_pos = $(this).scrollTop() +125; 
    }
    else{
      var cur_pos = $(this).scrollTop() + 125;
    }

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();  

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });




 

  // Porfolio isotope and filter
  $(window).on('load', function() {
 
    // // Initiate venobox (lightbox feature used in portofilo)
   
  });

  $(document).ready(function() {
   setTimeout(()=>{
    $('#fsModal').modal('toggle');
   },30)
    
    setTimeout(()=>{
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('#flipbook').turn({
              width:300,	
              height:400,
              elevation: 50,
              gradients: true,
              autoCenter: true,
              display: "single"   
            });
       }
       else{
            $('#flipbook').turn({
              width:800,	
              height:500,
              elevation: 50,
              gradients: true,
              autoCenter: true
               
            });
       }
     
  },2)

    $('#btnModalOpen').click(function(){
     // alert();
    //  $("#fsModal").modal('show');
        // if ( $( '#flipbook' ).turn( 'is' ) ) {
        //        console.log("destroy")
        //       $( '#flipbook' ).turn( 'destroy' );
        //       $(window).unbind( 'keydown' );
        // }

     
      
    })
    $("#fsModal").modal('show');


 

    // $('.gallery-00').carousel({ overflow: true, visible: 2, itemMinWidth: 400, itemMargin: 10 });
    // $('.gallery-00').on('initCarousel', function(event, defaults, obj){
    //   // Hide controls
    //   // $('#'+defaults.navigation).find('.previous, .next').css({ opacity: 0 });
    //   // // Show controls on gallery hover
    //   // // #gallery-07 wraps .crsl-items and .crls-nav
    //   // // .stop() prevent queue
    //   // $('#gallery-07').hover( function(){
    //   //   $(this).find('.previous').css({ left: 0 }).stop(true, true).animate({ left: '20px', opacity: 1 });
    //   //   $(this).find('.next').css({ right: 0 }).stop(true, true).animate({ right: '20px', opacity: 1 });
    //   // }, function(){
    //   //   $(this).find('.previous').animate({ left: 0, opacity: 0 });
    //   //   $(this).find('.next').animate({ right: 0, opacity: 0 });
    //   // });
    // });
  });

// setTimeout(() => {
//   // $('.main-carousel-people').flickity({
//   //   // options
//   //   cellAlign: 'left',
//   //   autoPlay: true,
//   //   contain: true,
//   //   pageDots: true,
//   //   prevNextButtons:true
//   // });
//   $('.slick.marquee.main-carousel-people').slick({
//     // speed: 5000,
//     dots: true,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed:1500,
//     pauseOnHover:true,
//     // centerMode: true,
//     // centerPadding: '30px',
//     prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
//     nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode: false
//         }
//       },
//       {
//         breakpoint: 1008,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode: false
//         }
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: false,
//           centerMode: true,
//           centerPadding: '50px',
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//           centerMode: true,
//           cssEase: 'linear',
//           variableWidth: true,
//         }
//       } 

//     ]

//     // 
//     // autoplaySpeed: 200,
//     // centerMode: true,
//     // cssEase: 'linear',
//     // slidesToShow: 3,
//     // slidesToScroll: 1,
//     // variableWidth: true,
//     // infinite: true,
    
//     // 
//     // 
     
//   });
// }, 2500);


})(jQuery);

function Random(){
  var randm = parseInt(Math.random()*10000000);
  return randm;
}

app.controller('baseCtrl', function($scope,$http) {
 
   $scope.screenwidth = screen.width ;
   $scope.isPicsLoaded = false;

   $scope.pencilandcharcoalportrait = 16 ;
   $scope.acrylicoilportrait = 3 ;
   $scope.pencilsketchcharcoal = 6 ;
   $scope.colourpencilpainting = 8 ;
   $scope.colorpainting   = 16;
   $scope.digitalpainting  = 27 ;
   $scope.fabricpainting  = 13 ;
   $scope.illustration  = 6 ;
   $scope.wallpainting  = 30 ;



  //  function GetFilenames(paramname,how_many){
  //    var arr = [];
  //    for(i=1;i<=how_many;i++){
  //      var obj = {};
  //      obj.Img_name = paramname+'/'+paramname+i+'.jpg';
  //      arr.push(obj);
  //    }
  //    return JSON.parse(JSON.stringify(arr));
  //  }




















   function GetFilenames(paramname,how_many){
     
    var arr = [];
    if(paramname=="pencilandcharcoalportrait"){
      arr=[
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait1.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait2.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportraitfamily.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportraitgirl.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait3.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait4.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait5.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait6.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait7.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait8.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait9.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait10.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait11.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait12.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait13.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait14.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait15.jpg"},
        {"Img_name":"pencilandcharcoalportrait/pencilandcharcoalportrait16.jpg"}
      ]
    }
    else if(paramname=="acrylicoilportrait"){
      arr=[
        {"Img_name":"acrylicoilportrait/acrylicoilportrait1.jpg"},
        {"Img_name":"acrylicoilportrait/acrylicoilportrait2.jpg"},
        {"Img_name":"acrylicoilportrait/acrylicoilportrait1.jpg"},
        {"Img_name":"acrylicoilportrait/acrylicoilportrait2.jpg"}
    
      ]
    }
    else if(paramname=="pencilsketchcharcoal"){
      arr=[
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal1.jpg"},
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal2.jpg"},
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal3.jpg"},       
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal4.jpg"},       
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal5.jpg"},       
        {"Img_name":"pencilsketchcharcoal/pencilsketchcharcoal6.jpg"}      
      ]
    }
    else if(paramname=="colourpencilpainting"){
      arr=[
        {"Img_name":"colourpencilpainting/colourpencilpainting1.jpg"},
        {"Img_name":"colourpencilpainting/colourpencilpainting2.jpg"},
        {"Img_name":"colourpencilpainting/colourpencilpainting3.jpg"},       
        {"Img_name":"colourpencilpainting/colourpencilpainting4.jpg"},       
        {"Img_name":"colourpencilpainting/colourpencilpainting5.jpg"},       
        {"Img_name":"colourpencilpainting/colourpencilpainting6.jpg"},       
        {"Img_name":"colourpencilpainting/colourpencilpainting7.jpg"},       
        {"Img_name":"colourpencilpainting/colourpencilpainting8.jpg?v=1.1"},  
        {"Img_name":"colourpencilpainting/colourpencilpainting9.jpg?v=1.1"}     
      ]
    }
    else if(paramname=="colorpainting"){
      arr=[
        {"Img_name":"colorpainting/colorpainting1.jpg"},
        {"Img_name":"colorpainting/colorpainting2.jpg"},
        
        {"Img_name":"colorpainting/colorpainting4.jpg"},
        {"Img_name":"colorpainting/colorpainting5.jpg"},
        {"Img_name":"colorpainting/colorpainting6.jpg"},
        {"Img_name":"colorpainting/colorpainting7.jpg"},
   
        {"Img_name":"colorpainting/colorpainting9.jpg"},
        {"Img_name":"colorpainting/colorpainting10.jpg"},
        {"Img_name":"colorpainting/colorpainting11.jpg"},
        {"Img_name":"colorpainting/colorpainting12.jpg"},
        {"Img_name":"colorpainting/colorpainting13.jpg"},
        {"Img_name":"colorpainting/colorpainting14.jpg"},
        {"Img_name":"colorpainting/colorpainting15.jpg"},
        {"Img_name":"colorpainting/colorpainting16.jpg?v=1.2"}
      ]
    }
    else if(paramname=="digitalpainting"){
      arr=[
        {"Img_name":"digitalpainting/digitalpainting1.jpg"},
        {"Img_name":"digitalpainting/digitalpainting2.jpg"},
        {"Img_name":"digitalpainting/digitalpainting3.jpg"},
        {"Img_name":"digitalpainting/digitalpainting4.jpg"},
        {"Img_name":"digitalpainting/digitalpainting4_1.jpg"},
        {"Img_name":"digitalpainting/digitalpainting5.jpg"},
        {"Img_name":"digitalpainting/digitalpainting6.jpg"},
        {"Img_name":"digitalpainting/digitalpainting7.jpg"},
        {"Img_name":"digitalpainting/digitalpainting8.jpg"},
        {"Img_name":"digitalpainting/digitalpainting9.jpg"},
        {"Img_name":"digitalpainting/digitalpainting10.jpg"},
        {"Img_name":"digitalpainting/digitalpainting11.jpg"},
        {"Img_name":"digitalpainting/digitalpainting12.jpg"},
        {"Img_name":"digitalpainting/digitalpainting13.jpg"},
        {"Img_name":"digitalpainting/digitalpainting14.jpg"},
        {"Img_name":"digitalpainting/digitalpainting15.jpg"},
        {"Img_name":"digitalpainting/digitalpainting16.jpg"},
        {"Img_name":"digitalpainting/digitalpainting17.jpg"},
        {"Img_name":"digitalpainting/digitalpainting18.jpg"},
        {"Img_name":"digitalpainting/digitalpainting19.jpg"},
        {"Img_name":"digitalpainting/digitalpainting20.jpg"},
        {"Img_name":"digitalpainting/digitalpainting21.jpg"},
        {"Img_name":"digitalpainting/digitalpainting22.jpg"},
        {"Img_name":"digitalpainting/digitalpainting23.jpg"},
        {"Img_name":"digitalpainting/digitalpainting24.jpg"},
        {"Img_name":"digitalpainting/digitalpainting25.jpg"},
        {"Img_name":"digitalpainting/digitalpainting26.jpg"},
        {"Img_name":"digitalpainting/digitalpainting27.jpg"}
      ]
    }
    else if(paramname=="fabricpainting"){
      arr=[
        {"Img_name":"fabricpainting/fabricpainting1.jpg"},
        {"Img_name":"fabricpainting/fabricpainting2.jpg"},
        {"Img_name":"fabricpainting/fabricpainting3.jpg"},
        {"Img_name":"fabricpainting/fabricpainting4.jpg"},
        {"Img_name":"fabricpainting/fabricpainting5.jpg"},
        {"Img_name":"fabricpainting/fabricpainting6.jpg"},
        {"Img_name":"fabricpainting/fabricpainting7.jpg"},
        {"Img_name":"fabricpainting/fabricpainting8.jpg"},
        {"Img_name":"fabricpainting/fabricpainting9.jpg"},
        {"Img_name":"fabricpainting/fabricpainting10.jpg"},
        {"Img_name":"fabricpainting/fabricpainting11.jpg"},
        {"Img_name":"fabricpainting/fabricpainting12.jpg"},
        {"Img_name":"fabricpainting/fabricpainting13.jpg"}
      ]
    }
    else if(paramname=="illustration"){
      arr=[
        {"Img_name":"illustration/illustration1.jpg"},
        {"Img_name":"illustration/illustration2.jpg"},
        {"Img_name":"illustration/illustration3.jpg"},
        {"Img_name":"illustration/illustration4.jpg"},
        {"Img_name":"illustration/illustration5.jpg"},
        {"Img_name":"illustration/illustration6.jpg"}
      ]
    }
    else if(paramname=="wallpainting"){
      arr=[
        {"Img_name":"wallpainting/wallpainting1.jpg"},
        {"Img_name":"wallpainting/wallpainting2.jpg"},
        {"Img_name":"wallpainting/wallpainting3.jpg"},
        {"Img_name":"wallpainting/wallpainting3_1.jpg"},
        {"Img_name":"wallpainting/wallpainting3_2.jpg"},
        {"Img_name":"wallpainting/wallpainting3_3.jpg"},
        {"Img_name":"wallpainting/wallpainting4.jpg"},
        {"Img_name":"wallpainting/wallpainting5.jpg"},
        {"Img_name":"wallpainting/wallpainting6.jpg"},
        {"Img_name":"wallpainting/wallpainting7.jpg"},
        {"Img_name":"wallpainting/wallpainting8.jpg"},
        {"Img_name":"wallpainting/wallpainting9.jpg"},
        {"Img_name":"wallpainting/wallpainting10.jpg"},
        {"Img_name":"wallpainting/wallpainting11.jpg"},
        {"Img_name":"wallpainting/wallpainting12.jpg"},
        {"Img_name":"wallpainting/wallpainting13.jpg"},
        {"Img_name":"wallpainting/wallpainting14.jpg"},
        {"Img_name":"wallpainting/wallpainting15.jpg"},
        {"Img_name":"wallpainting/wallpainting16.jpg"},
        {"Img_name":"wallpainting/wallpainting17.jpg"},
        {"Img_name":"wallpainting/wallpainting18.jpg"},
        {"Img_name":"wallpainting/wallpainting19.jpg"},
        {"Img_name":"wallpainting/wallpainting20.jpg"},
        {"Img_name":"wallpainting/wallpainting21.jpg"},
        {"Img_name":"wallpainting/wallpainting22.jpg"},
        {"Img_name":"wallpainting/wallpainting23.jpg"},
        {"Img_name":"wallpainting/wallpainting24.jpg"},
        {"Img_name":"wallpainting/wallpainting25.jpg"},
        {"Img_name":"wallpainting/wallpainting26.jpg"},
        {"Img_name":"wallpainting/wallpainting27.jpg"},
        {"Img_name":"wallpainting/wallpainting28.jpg"},
        {"Img_name":"wallpainting/wallpainting29.jpg"},
        {"Img_name":"wallpainting/wallpainting30.jpg"}
      ]
    }
    
    return JSON.parse(JSON.stringify(arr));
  }



  //===============PortraitImgs===================
  
    $scope.pencilandcharcoalportrait_Imgs = GetFilenames('pencilandcharcoalportrait',$scope.pencilandcharcoalportrait);

     setTimeout(()=>{
      $('#pencilandcharcoalportrait_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)




     $scope.acrylicoilportrait_Imgs = GetFilenames('acrylicoilportrait',$scope.acrylicoilportrait);

     setTimeout(()=>{
      $('#acrylicoilportrait_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)




     $scope.pencilsketchcharcoal_Imgs = GetFilenames('pencilsketchcharcoal',$scope.pencilsketchcharcoal);

     setTimeout(()=>{
      $('#pencilsketchcharcoal_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)



     $scope.colourpencilpainting_Imgs = GetFilenames('colourpencilpainting',$scope.colourpencilpainting);

     setTimeout(()=>{
      $('#colourpencilpainting_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)



     $scope.colorpainting_Imgs = GetFilenames('colorpainting',$scope.colorpainting);

     setTimeout(()=>{
      $('#colorpainting_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)



     $scope.digitalpainting_Imgs = GetFilenames('digitalpainting',$scope.digitalpainting);

     setTimeout(()=>{
      $('#digitalpainting_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)



     $scope.fabricpainting_Imgs = GetFilenames('fabricpainting',$scope.fabricpainting);

     setTimeout(()=>{
      $('#fabricpainting_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)


     $scope.illustration_Imgs = GetFilenames('illustration',$scope.illustration);

     setTimeout(()=>{
      $('#illustration_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)



     $scope.wallpainting_Imgs = GetFilenames('wallpainting',$scope.wallpainting);

     setTimeout(()=>{
      $('#wallpainting_gallery').slick({
        // dots: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
     },500)




  


});


// arr.forEach((row, index)=>{
//   var dataas = row.split("\n");
//    var textdata =` {
//     "Name":"${dataas[0]}",
//     "Degree_Position":"${dataas[1]}",
//     "Year":"${dataas[2]}",
//     "Status":"",
//     "Institute":"",
//     "Email":"${dataas[3]}",
//     "Image":"content/images/people/test.jpg",
//     "External_Link":""
// },`
//  console.log(textdata)
// })

 



