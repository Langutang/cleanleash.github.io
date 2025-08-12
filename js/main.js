(function() {

  'use strict';

  // preloader
  $(window).on('load', function() {
    $('.loader').fadeOut('slow');
  });

  // smooth scroll
  $("a").on("click", function(event) {

      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate({

              scrollTop: $(hash).offset().top - 50

          }, 850);

      }

  });

  // magnific popup
  $('.display').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: '.popup-image', // the selector for portfolio item
          type: 'image',
          gallery: {
              enabled: true
          },
      });
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        780: {
          slidesPerView: 1,
        }
      }
    });
  });

  // navbar toggler icon
  $(document).on("click",".navbar-toggler",function(e){
      $(this).parent().siblings().find('i').removeClass('la-remove')
    $(this).find('i').toggleClass('la-remove')
  });

  // navbar on scroll
  $(window).on("scroll", function() {

      var onScroll = $(this).scrollTop();

      if( onScroll > 50) {
          $(".navbar").addClass("navbar-fixed");
      }
      else {
          $(".navbar").removeClass("navbar-fixed");
      }

  });

  // Slide-in animation on scroll
  function handleSlideIn() {
    const slideElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    slideElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleSlideIn);

  // Initial check for elements already in view
  document.addEventListener('DOMContentLoaded', handleSlideIn);

})();