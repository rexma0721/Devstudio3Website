document.createElement("article");



document.createElement("footer");



document.createElement("header");



document.createElement("hgroup");



document.createElement("nav");



document.createElement("aside");



document.createElement("section");







$(window).load(function() {



        $(".loader").fadeOut("slow");



});











$(document).ready(function() {



     $('#navbtn').click(function() {



          $('ul.nav-menu').animate({ height: 'toggle'}, 300);



      });



});







$(document).ready(function() { 







  $('ul.nav-menu').find('ul').parent().append('<span class="menuarrow"></span>');



  $(".menuarrow").click(function () {



		$(this).prev("ul").animate({ height: 'toggle'}, 300);



		//$(this).removeAttr("href");



		//return false;



		if ($(this).parent().hasClass('active')) {



      		$(this).parent().removeClass('active');



   		 } else {



      		$(this).parent().addClass('active');



    	} 



    });



/*if ($(window).width() < 840) {



 $('.page-scroll').click(function() {



          $('ul.nav-menu').animate({ height: 'toggle'}, 300);



      });



    



}*/



});







$(window).load(function () {



    width1 =  ($(".wrapper").width());



	var windowwith1 = $(window).width(), divWidth=0;



	var getwidth1 = ((windowwith1 - width1) / 2);



	$('.fullpage').css({'marginLeft':(-getwidth1)+'px'});



	$('.fullpage').css({'marginRight':(-getwidth1)+'px'});



	$('.fullpage-content').css({'marginLeft':(-getwidth1)+'px'});



	$('.fullpage-content').css({'marginRight':(-getwidth1)+'px'});



	$('.fullpage-content').css({'paddingLeft':(getwidth1)+'px'});



	$('.fullpage-content').css({'paddingRight':(getwidth1)+'px'});



});



var width = $(window).width();



$(window).resize(function(){



	width2 =  ($(".wrapper").width());



	var windowwith2 = $(window).width(), divWidth=0;



	var getwidth2 = ((windowwith2 - width2) / 2);



	$('.fullpage').css({'marginLeft':(-getwidth2)+'px'});



	$('.fullpage').css({'marginRight':(-getwidth2)+'px'});



	$('.fullpage-content').css({'marginLeft':(-getwidth2)+'px'});



	$('.fullpage-content').css({'marginRight':(-getwidth2)+'px'});



	$('.fullpage-content').css({'paddingLeft':(getwidth2)+'px'});



	$('.fullpage-content').css({'paddingRight':(getwidth2)+'px'});



});







$(window).load(function(){	



AOS.init({



	easing: 'ease-in-out-sine',



	duration: 600,



	once: true,



});







$('.flexslider').flexslider({



    animation: "fade"



  });







}); 











$(document).ready(function(){







$('#owl-one').owlCarousel({



        autoplay: true,



        		autoPlaySpeed: 5000,



        		autoPlayTimeout: 5000,



        		autoplayHoverPause: true,



                loop: true,



                margin: 0,



                responsiveClass: true,



        responsive:{



            0:{



                items: 1,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin:10



            },



            600:{



                items: 1,                   



					nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            },



            1024:{



                items: 1,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            },



            1025:{



                items: 1,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            }



        }



    });



	



$('#owl-two').owlCarousel({



        autoplay:false,



autoplayTimeout:1000,



		



        		



        		autoplayHoverPause: true,



                loop: true,



                margin: 0,



                responsiveClass: true,



        responsive:{



            0:{



                items: 3,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin:0



            },



            600:{



                items: 3,                   



					nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            },



            1024:{



                items: 5,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            },



            1025:{



                items: 7,



                    nav: true,



                    loop: true,



					autoplay: true,



                    margin: 0



            }



        }



    });



});











$(document).ready(function() {



        $(window).scroll(function() {



          if ($(this).scrollTop() > 50) {



            $('#back-to-top').fadeIn();



          } else {



            $('#back-to-top').fadeOut();



          }



        });



        // scroll body to 0px on click



        $('#back-to-top').click(function() {



          $('body,html').animate({



            scrollTop: 0



          }, 400);



          return false;



        });







window.onscroll = function() {myFunction()};







var header = document.getElementById("header");



var sticky = header.offsetTop;







function myFunction() {



  if (window.pageYOffset > sticky) {



    header.classList.add("sticky");



  } else {



    header.classList.remove("sticky");



  }



}



});







$(document).ready(function(){



$( "ul.tabs li:first-child, .tab-content:first-child" ).addClass('active');



	$('ul.tabs li').click(function(){



		var tab_id = $(this).attr('data-tab');



		$('ul.tabs li').removeClass('active');



		$('.tab-content').removeClass('active');



		$(this).addClass('active');



		$("#"+tab_id).addClass('active');



	})



	



//===== Section Menu Active





   



})











$(document).ready(function(){



	$(".inline").colorbox({inline:true, width:"75%"});



});



$("#files").change(function() {



  filename = this.files[0].name;



  console.log(filename);



});



/*$(document).ready( function() {
	 $(".page-scroll").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top -60 ;
    $('html, body').animate({scrollTop:offset}, 1500);
	$('ul.nav-menu').animate({ height: 'toggle'}, 500);
  });
  });*/

/*$(document).ready( function() {
    if ($(window).width() < 740) {
     $(".page-scroll").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top -60 ;
    $('html, body').animate({scrollTop:offset}, 1500);
	$('ul.nav-menu').animate({ height: 'toggle'}, 500);
  });
    }
    else {
      $(".page-scroll").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top -60;
    $('html, body').animate({scrollTop:offset}, 1000);
	$('ul.nav-menu').animate({ height: 'toggle'}, 300);
  });
    }
  });*/
  
  
  

$(document).ready( function() {
	
	
	 $(".page-scroll").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top -60 ;
    $('html, body').animate({scrollTop:offset}, 1500);
//	$('ul.nav-menu').animate({ height: 'toggle'}, 500);
  });
  

	
  $('#navigation ul li').click(function(){
    $('#navigation ul li').removeClass("active");
    $(this).addClass("active");
});
	
  $('#navigation ul li a').click(function(){
    $('ul.nav-menu').animate({ height: 'toggle'}, 500);
});

  
  });

$(document).ready( function() {  

 $('.inline').click(function(){
    $('ul.nav-menu').animate({ height: 'toggle'}, 500);
});


 });