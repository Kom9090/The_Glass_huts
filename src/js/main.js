/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
//= ============== svg animation ================================
import Vivus from 'vivus';
//= ==============================================================
//= ============== tooltips ======================================
import Tooltip from './modules/tooltip.js';
//= ==============================================================
//= ============== test support Webp  ============================
import testWebp from './modules/test-webp.js';
//= ==============================================================
//= ================= swiper =====================================
import Swiper from 'swiper/bundle';
//= ==============================================================
//= ================ fslightbox ==================================
require('../../node_modules/fslightbox/index.js');
//= ==============================================================
//= ================ leaflet =====================================
require('../../node_modules/leaflet/dist/leaflet.js');
//= ==============================================================
//= ================ gasture handling ============================
require('../../node_modules/leaflet-gesture-handling/dist/leaflet-gesture-handling');
//= ==============================================================
//= ================ AOS =========================================
import AOS from 'aos';
//= ==============================================================
//= ================ popup  ======================================
import popup from './modules/popup.js';
//= ==============================================================
//= ================ ======================================
import { burgerMenu } from './modules/burger.js';
//= ==============================================================
//= ================ ======================================
import { fixedHeader } from './modules/fixed-header.js';
//= ==============================================================
//= ================ ======================================
import { customSelect } from './modules/select.js';
//= ==============================================================
//= ================ ======================================
import { lightboxes } from './modules/lightboxes.js';
//= ==============================================================
//= ================ ======================================
import { hideText } from './modules/hideText.js';
//= ==============================================================
//= ================ ======================================
import { quantity } from './modules/quantity.js';
//= ==============================================================
//= ================ ======================================
import { calendar } from './modules/calendar.js';
//= ==============================================================
//= ================ ======================================
import { datepicker } from './modules/datepicker.js';
//= ==============================================================
//= ================ ======================================
import { tabs } from './modules/tabs.js';
//= ==============================================================
//= ================ ======================================
import { labelToTop } from './modules/label.js';
//= ==============================================================
//= ================ ======================================
import smoothscroll from 'smoothscroll-polyfill';
//= ==============================================================
//= ================ ======================================
import { spoller } from './modules/spoller.js';
//= ==============================================================
//= ================ ======================================
import { services } from './modules/services.js';
//= ==============================================================
//= ================ ======================================
import { sendForm } from './modules/sendForm.js';
//= ==============================================================
//= ================ ======================================
import { addDiscount } from './modules/addDiscount.js';
//= ==============================================================
//= ================ ======================================
import { submitBook } from './modules/submitBook.js';
//= ==============================================================
//= ================ ======================================
import IMask from 'imask';
//= ==============================================================
//= ================ ======================================
import { searchCountry } from './modules/searchCountry.js';
//= ==============================================================
//= ================ ======================================
import { formValidation } from './modules/formValidation.js';
//= ==============================================================
//= ================ ======================================
import { subscribe } from './modules/subscribe.js';
//= ==============================================================
//= ================ ======================================
import { history } from './modules/history.js';
//= ==============================================================
AOS.init({
  disable: 'mobile',
  once: true,
  duration: 1500
});
//= ==================  =====================================
popup();
//= ==============================================================

const IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);

//= ================ header ======================================
burgerMenu();

fixedHeader();

customSelect();

//= ==============================================================

if (!IS_MOBILE) {
  const rightTt = new Tooltip('._tt-right', {
    type: 'right',
    indent: 12,
    arrow: false
  });
  const bottomTt = new Tooltip('._tt-bottom', {
    type: 'bottom',
    indent: 12,
    arrow: false
  });
}

//= ==============================================================

if (!IS_MOBILE) {
  const body = document.body;
  body.classList.add('_pc');
}

//= ==============================================================
lightboxes();
//= ==================================================================

const logoAnimation = new Vivus(
  'logo',
  {
    type: 'delayed',
    duration: 200
  }
);

//= =================================================================

import {
  swiperIntro, 
  swiperCabins, 
  swiperBanners, 
  swiperOutside, 
  swiperInside, 
  swiperPracticalities
} from './modules/sliders.js';

//= =================================================================
//= == button "more" ================================================

hideText();

//= ==================================================================
//= ================== bg image go to slider =========================

if (document.querySelector('.cabins__swiper')) {
  window.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleTabletChange(e) {
      let div = document.createElement('div');
      if (e.matches) {
        div.className = 'swiper-slide _slide-remove';
        div.innerHTML = `<a class="cabins-swiper__link link-cover" data-fslightbox="gallery" href="./images/gallery0.jpg">
                                    <img src="./images/the-bed-features.jpg" class="swiper-lazy cabins-swiper__img" alt="d" />
                                </a>`;
        const wrapper = document.querySelector('.cabins-swiper__wrapper');
        wrapper.prepend(div);
        // eslint-disable-next-line no-undef
        refreshFsLightbox();
        swiperCabins.update();
      }
    }
    mediaQuery.addEventListener('change', handleTabletChange);
    handleTabletChange(mediaQuery);

    // back bg image

    const mediaQueryMin = window.matchMedia('(min-width: 769px)');
    function handleDesktopChange(e) {
      if (e.matches) {
        let removeDiv = document.querySelector('._slide-remove');
        if (removeDiv) {
          removeDiv.remove();
          refreshFsLightbox();
          swiperCabins.update();
        }
      }
    }
    mediaQueryMin.addEventListener('change', handleDesktopChange);
    handleDesktopChange(mediaQueryMin);
  });
}

//= ====================================================================
//= ======================= maps =======================================
if (document.getElementById('forest')) {
  let forestMap = L.map('forest', {
    center: [64.0099, -21.9677],
    zoom: 14,
    gestureHandling: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(forestMap);

  let Marker = L.divIcon({
    className: 'marker',
    html: `<span class="marker__waves"></span>
            <span class="marker__waves" ></span>
        <span class="marker__waves"></span>`
  });
  L.marker([64.0099, -21.9677], { icon: Marker }).addTo(forestMap);

  forestMap.addEventListener('click', () => {
    let waves = document.querySelectorAll('.marker__waves');
    for (let i = 0; i < waves.length; i++) {
      waves[i].classList.toggle('marker__waves_hide');
    }
  });
}

if (document.getElementById('area')) {
  let areaMap = L.map('area', {
    center: [64.0099, -21.9677],
    zoom: 14,
    gestureHandling: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(areaMap);

  let Marker = L.divIcon({
    className: 'marker',
    html: `<span class="marker__waves"></span>
            <span class="marker__waves" ></span>
        <span class="marker__waves"></span>`
  });
  L.marker([64.0099, -21.9677], { icon: Marker }).addTo(areaMap);

  areaMap.addEventListener('click', () => {
    let waves = document.querySelectorAll('.map-waves');
    for (let i = 0; i < waves.length; i++) {
      waves[i].classList.toggle('_waves-hide');
    }
  });
}

//= ======================================================================
quantity('.quantity__input', '.minus-btn', '.plus-btn');
//= =======================================================================
calendar();
// ========================================================================
datepicker();
// ========================================================================
tabs();
// =========================================================================
labelToTop();
smoothscroll.polyfill();
// =========================================================================
if (document.querySelector('._anchor')) {
  const anchor = document.querySelector('._anchor');
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 100;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
    function getInputFocus() {
      scrollTarget.focus();
    }
    setTimeout(getInputFocus, 500);
  });
}
// ===========================================================================
spoller();

services();

sendForm();

addDiscount();

submitBook();

// import { binking } from 'binking';
if (document.querySelector('.confirm')) {
  searchCountry();
  const element = document.getElementById('phone');
  const maskOptions = {
    mask: '+{38}(000)000-00-00'
  };
  const mask = IMask(element, maskOptions);
  formValidation('payForm');
}
if (document.querySelector('.form-about-us')) {
  formValidation('contactForm');
}

subscribe();

history();

// const $cardNumberField = document.getElementById('cardNumber');
// function initMasks() {
//   cardNumberMask = IMask($cardNumberField, {
//     mask: binking.defaultResult.cardNumberMask
//   });
// }
// initMasks();

import { topImage } from './modules/top-image.js';
if (document.querySelector('.intro')) {
  topImage();
}
