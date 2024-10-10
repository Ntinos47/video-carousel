$('.slikc-carousel').slick({
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


function toggleImageAndVideo(slide) {
  const $iframe = $(slide).find('iframe');
  const $image = $(slide).find('img[data-img="true"]');

  if ($iframe.length && $image.length) {
      if ($(slide).hasClass('slick-current')) {
          $image.hide();
          const videoSrc = $iframe.attr('src');
          if (videoSrc && !videoSrc.includes('autoplay=1')) {
              $iframe.attr('src', videoSrc.replace('autoplay=0', 'autoplay=1'));
          }
        // Unmute the video
        const newSrc = videoSrc.replace('mute=1', 'mute=0');
        $iframe.attr('src', newSrc);
        $(this).find('.on').hide();
        $(this).find('.off').show();
      } else {
          $image.show();
          const videoSrc = $iframe.attr('src');
          if (videoSrc && videoSrc.includes('autoplay=1')) {
              $iframe.attr('src', videoSrc.replace('autoplay=1', 'autoplay=0'));
          }
        // Mute the video
        const newSrc = videoSrc.replace('mute=0', 'mute=1');
        $iframe.attr('src', newSrc);
        $(this).find('.off').hide();
        $(this).find('.on').show();
      }
  }
}

$('.slikc-carousel').on('afterChange', function(event, slick, currentSlide) {
  const slides = slick.$slides;
  slides.each(function(index, slide) {
      toggleImageAndVideo(slide);
  });
});

$('#start-button').on('click', function() {
  $('.slikc-carousel').slick('slickGoTo', 1);
  $('.slick-prev').addClass('visible');
});

$('.slick-next').on('click', function() {
  $('.slick-prev').addClass('visible');
});

$('.slikc-carousel').on('init', function(event, slick) {
  $('.slick-prev').removeClass('visible');
});



$(document).on('click', '.sound', function() {
  const $iframe = $(this).closest('.slide').find('iframe');
  const videoSrc = $iframe.attr('src');

  // Check if video is muted
  const isMuted = videoSrc.includes('mute=1');
  
  if (isMuted) {
      // Unmute the video
      const newSrc = videoSrc.replace('mute=1', 'mute=0');
      $iframe.attr('src', newSrc);
      $(this).find('.on').hide();
      $(this).find('.off').show();
  } else {
      // Mute the video
      const newSrc = videoSrc.replace('mute=0', 'mute=1');
      $iframe.attr('src', newSrc);
      $(this).find('.off').hide();
      $(this).find('.on').show();
  }
});
