import Swiper from 'swiper/bundle';

export const swiperIntro = new Swiper('.intro', {
  loop: true,
  lazy: true,
  effect: 'fade',
  pagination: {
    el: '.intro .intro__pagination',
    type: 'progressbar'
  },

  navigation: {
    nextEl: '.intro .intro__next',
    prevEl: '.intro .intro__prev'
  }
});

export const swiperCabins = new Swiper('.cabins__swiper', {
  preloadImages: false,
  lazy: true,
  spaceBetween: 24,
  pagination: {
    el: '.cabins-swiper__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.cabins-swiper .cabins-swiper__next',
    prevEl: '.cabins-swiper .cabins-swiper__prev'
  },
  breakpoints: {
    280: {
      slidesPerView: 1.2
    },
    380: {
      slidesPerView: 1.5
    },
    450: {
      slidesPerView: 1.7
    },
    500: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 2.6
    },
    1000: {
      slidesPerView: 3.2
    },
    1408: {
      slidesPerView: 3.5
    },
    1500: {
      slidesPerView: 4
    },
    1750: {
      slidesPerView: 4.5
    }
  }
});

export const swiperBanners = new Swiper('.banner__slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  effect: 'fade',
  touchRatio: 0.5,
  lazy: true
});

export const swiperOutside = new Swiper('.outside-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.outside-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.outside .swiper-next',
    prevEl: '.outside .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperInside = new Swiper('.inside-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.inside-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.inside .swiper-next',
    prevEl: '.inside .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperPracticalities = new Swiper('.practicalities-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.practicalities-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.practicalities .swiper-next',
    prevEl: '.practicalities .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperHafnarfjrdur = new Swiper('.hafnarfjrdur-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hafnarfjrdur-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.hafnarfjrdur .swiper-next',
    prevEl: '.hafnarfjrdur .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperShopping = new Swiper('.shopping-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.shopping-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.shopping .swiper-next',
    prevEl: '.shopping .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperNature = new Swiper('.nature-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.nature-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.nature .swiper-next',
    prevEl: '.nature .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperDrive = new Swiper('.drive-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.drive-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.drive .swiper-next',
    prevEl: '.drive .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});

export const swiperTown = new Swiper('.town-slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.town-slider__pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.town .swiper-next',
    prevEl: '.town .swiper-prev'
  },
  grabCursor: true,
  lazy: true,
  effect: 'fade'
});
