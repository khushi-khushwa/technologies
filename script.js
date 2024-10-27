$(document).ready(function(){
    $("#slider-1").owlCarousel({
        margin:20,
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
      
        responsive:{
            100:{
                items:1,
                nav:false
            },
            200:{
                items:1,
                nav:true
               },
               400:{
                items:1,
                nav:false
               },
          800:{
            items:1,
                nav:false
          },
            1000:{
                items:1,
               nav:false
            },
            1200:{
                items:1,
                nav:true,
                loop:true
            },
           
            
        }
    });
    
  });



  $(document).ready(function(){
    $("#slider-2").owlCarousel({
        // margin:20,
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
      
        responsive:{
            100:{
                items:1,
                nav:false
            },
            200:{
                items:1,
                nav:true
               },
               400:{
                items:1,
                nav:false
               },
          800:{
            items:1,
                nav:false
          },
            1000:{
                items:1,
               nav:false
            },
            1200:{
                items:1,
                nav:true,
                loop:true
            },
           
            
        }
    });
    
  });
  