$('.slikc-carousel').slick({
  infinite: false,
  centerPadding: '60px',
  slidesToShow: 3,
  draggable: false,
  responsive: [
      {
          breakpoint: 768,
          settings: {
              centerPadding: '40px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              centerPadding: '40px',
              slidesToShow: 1
          }
      }
  ]
});

$('.slikc-carousel').on('init', function(event, slick) {
  $('.slick-prev').removeClass('visible');
});

$('#start-button').on('click', function() {
  $('.slikc-carousel').slick('slickGoTo', 1);
  $('.slick-prev').addClass('visible');
});

$('.slick-next').on('click', function() {
  $('.slick-prev').addClass('visible');
});

$('.slikc-carousel').on('afterChange', function(event, slick, currentSlide) {
  const totalSlides = slick.slideCount;

  if (currentSlide === 0) {
      $('.slick-prev').removeClass('visible');
  } else if (currentSlide === totalSlides - 1) {
      $('.slick-prev').removeClass('visible').css('display', 'none');
  } else {
      if (!$('.slick-prev').hasClass('hidden-permanently')) {
          $('.slick-prev').addClass('visible').addClass('hidden-permanently');
      }
  }
});
