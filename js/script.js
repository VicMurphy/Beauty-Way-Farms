// $(document).ready(function(){
//   $('.single-item').slick();
//     dots: true,
//     speed: 700,
//     autoplay:true,
//     autoplaySpeed: 2000,
//     arrows:true,
//     slidesToShow: 1,
//     slidesToScroll: 3
//   });
// });

$(document).ready(function(){
  $("#menu-button").click(function(){
    $(this).toggleClass("active");
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $("#menu").slideToggle("slow");
  });
});
