new Swiper('.intro', {

    loop: true,


    pagination: {
        el: '.intro .intro__pagination',
        type: "progressbar"
    },

    lazy: true,
    navigation: {
        nextEl: '.intro .intro__next',
        prevEl: '.intro .intro__prev',
    },
    effect: "fade",
});

new Swiper('.cabins__swiper', {
    preloadImages: false,
    lazy: true,
    spaceBetween: 24,
    pagination: {
        el: '.cabins-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.cabins__swiper .cabins-swiper__next',
        prevEl: '.cabins__swiper .cabins-swiper__prev',
    },
    breakpoints: {
        280: {
            slidesPerView: 1.2,
        },
        380: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 1.7,
        },
        500: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.6,
        },
        1000: {
            slidesPerView: 3.2,
        },
        1408: {
            slidesPerView: 3.5,
        },
        1500: {
            slidesPerView: 4,
        },
        1750: {
            slidesPerView: 4.5,
        }
    },
});

new Swiper('.contact__slider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    effect: "fade",
    touchRatio: 0.5,
    lazy: true,
});

new Swiper('.outside__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.outside-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.outside__slider .outside-swiper__next',
        prevEl: '.outside__slider .outside-swiper__prev',
    },
});

new Swiper('.inside__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.inside-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.inside__slider .inside-swiper__next',
        prevEl: '.inside__slider .inside-swiper__prev',
    },
});

new Swiper('.practicalities__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.practicalities-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.practicalities__slider .practicalities-swiper__next',
        prevEl: '.practicalities__slider .practicalities-swiper__prev',
    },
});

new Swiper('.hafnarfjrdur__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.hafnarfjrdur-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.hafnarfjrdur__slider .hafnarfjrdur-swiper__next',
        prevEl: '.hafnarfjrdur__slider .hafnarfjrdur-swiper__prev',
    },
});

new Swiper('.shopping__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.shopping-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.shopping__slider .shopping-swiper__next',
        prevEl: '.shopping__slider .shopping-swiper__prev',
    },
});

new Swiper('.nature__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.nature-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.nature__slider .nature-swiper__next',
        prevEl: '.nature__slider .nature-swiper__prev',
    },
});

new Swiper('.drive__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.drive-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.drive__slider .drive-swiper__next',
        prevEl: '.drive__slider .drive-swiper__prev',
    },
});

new Swiper('.town__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.town-swiper__pagination',
        type: "progressbar"
    },
    navigation: {
        nextEl: '.town__slider .town-swiper__next',
        prevEl: '.town__slider .town-swiper__prev',
    },
});