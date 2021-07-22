const btnScrollToTop = document.querySelector("btnScrollToTop")

$("#btnScrollToTop").addEventListener("click", function() {

$("html, body").animate({scrollTop: 0}, "slow");

});

// (function($){
//     'use strict';
//       $(window).on('load', function () {
//           if ($(".pre-loader").length > 0)
//           {
//               $(".pre-loader").fadeOut("slow");
//           }
//     setTimeout(fade, 3000);
//       });
//   })(jQuery)

//   function fade() {
//     $('.pre-loader').fadeOut("slow");
//     }
//     setTimeout(fade, 3000);