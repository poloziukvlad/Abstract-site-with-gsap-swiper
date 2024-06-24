const swiperText = new Swiper(".swiper", {
  speed: 1600,
  mousewheel: {},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

swiperText.on("slideChange"),
  function () {
    gsap.to(video, 1.6, {
        currentTime:(video.duration / this.slide.length) * this.realIndex
    });
  };
