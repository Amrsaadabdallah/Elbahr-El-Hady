// $(document).ready(function(){




//     /*
//      * run fire function of  Jquery owlCarousel plugin
//      */ 
//     $('.owl-carousel').owlCarousel({
//                                     // stagePadding: 100,
//                                     loop:true,
//                                     margin:10,
//                                     nav:true,

//                                     // stagePadding: 50,
//                                     responsive:{
//                                         0:{
//                                             items:1
//                                         },
//                                         600:{
//                                             items:1
//                                         },
//                                         1000:{
//                                             items:1
//                                         }
//                                     }


//                                 });
                                

//       /*
//        *  Run fire function of Jquery validation plugin
//       */              
//     $("#orderForm").validate();

// });

                
      






 $(document).ready(function(){


/*
* run fire function of  Jquery owlCarousel plugin
*/ 
    let one = $("#owl-one");
    let two = $("#owl-two");
 
   one.owlCarousel({
                    rtl:true,
                    loop:true,
                    margin:10,
                    nav:true,
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
                    }});

    two.owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true ,
                center:true ,
                margin: 60 
            },
            992:{
                items:3,
                nav:false ,
                margin: 30
            }
        }
    })

                           

    /*
    *  Run fire function of Jquery validation plugin
    */              
    $("#orderForm").validate();

});

                
      