
$(document).ready(function(){
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#btnScrollToTop').fadeIn();
      } else {
          $('#btnScrollToTop').fadeOut();
      }
  });

  
     $('#btnScrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
     });


    $('#workNav').click(function(){
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".casestudyGrid").offset().top
        }, 2000);

    });

  });