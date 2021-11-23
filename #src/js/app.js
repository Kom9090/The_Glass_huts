@@include("cabins.js");
@@include("../../node_modules/vivus/dist/vivus.min.js");

@@include("../../node_modules/swiper/swiper-bundle.min.js");
@@include("fslightbox.js");


const body = document.querySelector("body");
const popupLinks = document.querySelectorAll(".popup-link");
const lockPadding = document.querySelectorAll(".lock-padding");
let unlock = true;
const timeout = 300;

@@include("header.js");
@@include("sliders.js");
@@include("maps.js");

@@include("popup.js");
@@include("calendar.js");
@@include("tabs.js");
@@include("form.js");
@@include("faq.js");
@@include("booking.js");
@@include("confirm.js");
@@include("smoothscroll.js");
@@include("multilang.js");






function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector(".content").offsetWidth + "px";
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = "0px";
        }
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}


new Vivus(
    'my-svg',
    {
        type: 'delayed',
        duration: 200
    }
);

AOS.init({
    disable: "mobile",
    once: true,
    duration: 1500,
});

//=========================link-more========================

if (document.querySelector(".link-more")) {
    const linksMore = document.querySelectorAll(".link-more"); 
    const forestMap = document.querySelector(".map-block");
    linksMore.forEach(function(item, index) {
        
        item.addEventListener("click", () => {
            if (item.textContent === "Read More") {
                item.textContent = "Hide More";
                if (item.classList.contains("forest__link")) {
                    forestMap.classList.add("_bottom-m");
                }
                
            } else {
                item.textContent = "Read More";
                if (item.classList.contains("forest__link")) {
                    forestMap.classList.remove("_bottom-m");
                }
            }
            item.previousElementSibling.classList.toggle("_alltext");
            
        })
    });
}

//==========================================================

if (document.querySelector(".contact-us__input")) {
    const anchors = document.querySelectorAll('.anchor-link');

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (anchor == document.querySelector(".anchor-link")) {
            
            setTimeout(getInputFocus, 500);
        }
        const blockID = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
        
    });
    }

    function getInputFocus() {
        let input = document.querySelector(".contact-us__input");
        input.focus();
    }
}


//=================================================================
let bbbb = document.querySelectorAll("._h2-title");
console.log(bbbb);

