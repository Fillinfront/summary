$(function() {
    let header = $('.header');
    let body = document.querySelector('.body');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('fixed');
       body.classList.add('fixed');
       
      } else {
       header.removeClass('fixed');
       body.classList.remove('fixed');
       
      }
    });
   });

   document.addEventListener('DOMContentLoaded', function() {
    var elms = document.querySelectorAll('.slider');
    for (var i = 0, len = elms.length; i < len; i++) {
      // инициализация elms[i] в качестве слайдера
      new ChiefSlider(elms[i]);
      new ChiefSlider('.slider', {
        loop: true, // без зацикливания
        swipe: true, // без свайпа
        autoplay: true,
        interval: 5000,
        refresh: false
      });
    }
  });