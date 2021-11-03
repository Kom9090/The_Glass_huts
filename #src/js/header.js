//menu burger 
document.querySelector(".header__menu-icon").addEventListener("click", function () {
    const burgerIcon = document.querySelector(".header__menu-icon");
    const menuBurger = document.querySelector(".menu__list");
    burgerIcon.classList.toggle("_active-burger");
    menuBurger.classList.toggle("_active-nav");
    if (burgerIcon.classList.contains("_active-burger")) {
        bodyLock();
        document.documentElement.addEventListener("click", function (event) {
            if (!event.target.closest(".header__menu-icon") && !event.target.closest(".select-lang")) {
                burgerIcon.classList.remove("_active-burger");
                menuBurger.classList.remove("_active-nav");
                bodyUnLock();
            }
        }
        );
    } else {
        bodyUnLock();
    }
});

// opacity scroll-header


window.onload = function () {

    const header = document.querySelector(".header");
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            header.classList.remove("_scrolling");
        } else {
            header.classList.add("_scrolling");
        }
    }

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(header);


    //header-offset fslightbox
    
    const html = document.querySelector("html");
    const config = {
        attributes: true,
    };
    let isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    const callbackHtml = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && !isMobile) {
                const lockPaddingValue = window.innerWidth - document.querySelector(".content").offsetWidth + "px";
                if ((document.querySelector("._wrapper-padding").style.paddingRight !== "0px")) {
                    document.querySelector("._wrapper-padding").style.paddingRight = "0px";
                } else {
                    document.querySelector("._wrapper-padding").style.paddingRight = lockPaddingValue;
                }
            } else if (mutation.type === 'attributes' && isMobile) {
                body.style.marginRight = "0px";
            }
        }
    };
    const htmlObserver = new MutationObserver(callbackHtml);
    htmlObserver.observe(html, config);

}

