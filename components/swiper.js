// Initialize the slideshow for each project
var swipers = document.querySelectorAll('.swiper');

swipers.forEach(function (swiper) {
  new Swiper(swiper, {
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});