/* eslint-disable no-undef */
//= ================ fslightbox ==================================
require('../../../node_modules/fslightbox/index.js');
//= ==============================================================
import { getScrollbarWidth } from "./getScrollbarWidth";
export const lightboxes = () => {
  if (document.querySelector('.cabins')) {
    fsLightboxInstances.gallery.props.exitFullscreenOnClose = true;
    fsLightboxInstances.gallery.props.onOpen = () => {
      const body = document.body;
      const headerWrapper = document.querySelector('.header__wrapper');
      const marginValue = getScrollbarWidth();
      body.style.marginRight = marginValue;
      headerWrapper.style.paddingRight = marginValue;
    };
    fsLightboxInstances.gallery.props.onClose = () => {
      const headerWrapper = document.querySelector('.header__wrapper');
      headerWrapper.style.paddingRight = '0px';
    };
  } else if (document.querySelector('.gallery')) {
    fsLightboxInstances.gallery2.props.exitFullscreenOnClose = true;
    fsLightboxInstances.gallery2.props.onOpen = () => {
      const body = document.body;
      const headerWrapper = document.querySelector('.header__wrapper');
      const marginValue = getScrollbarWidth();
      body.style.marginRight = marginValue;
      headerWrapper.style.paddingRight = marginValue;
    };
    fsLightboxInstances.gallery2.props.onClose = () => {
      const headerWrapper = document.querySelector('.header__wrapper');
      headerWrapper.style.paddingRight = '0px';
    };
  }
};
