//bg image go to slider
if(document.querySelector(".cabins__swiper")) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleTabletChange(e) {
        let div = document.createElement("div");
        if (e.matches) {
            div.className = "swiper-slide _slide-remove swiper-slide-active";
            div.innerHTML = `<a class="cabins__slide-link" data-fslightbox="galery" href="./image/the-bed-features.jpg">
                                <img src="./image/the-bed-features.jpg" class="swiper-lazy cabins__img" alt="d" />
                            </a>`;
            const wrapper = document.querySelector(".swiper__cabins-wrapper");
            wrapper.prepend(div);
        } 
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);

    //back bg image

    const mediaQueryMin = window.matchMedia('(min-width: 769px)');
    function handleDesktopChange(e) {
        if (e.matches) {
            let removeDiv = document.querySelector("._slide-remove");
            if(removeDiv) {
                removeDiv.remove();
            }  
        }
    }
    mediaQueryMin.addListener(handleDesktopChange);
    handleDesktopChange(mediaQueryMin);
}
