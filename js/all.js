$(document).ready(function() {
  $('.dropdown').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');

    $(this).parent().siblings().find('ul').fadeOut().delay(0);
    $(this).parent().find('ul').slideToggle();
  })

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 500,
    effect: 'fade',
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


  $('.goTop').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0,
    }, 500);
  })


})