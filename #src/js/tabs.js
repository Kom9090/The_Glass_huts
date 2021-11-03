const tabBtns = document.querySelectorAll(".hut-sliders__btn");
const tabContent = document.querySelectorAll(".hut-sliders__text");

tabBtns.forEach(function(item, index) {
    item.addEventListener("click", () => {
        let arrSisters = item.parentElement.children; 
        let arrContent = tabContent[index].parentElement.children;
        for (let i = 0; i < arrSisters.length; i++) {
            arrSisters[i].classList.remove("_active-tab");
            arrContent[i].classList.remove("_active-tab");
        }
        item.classList.add("_active-tab");
        tabContent[index].classList.add("_active-tab");
    })
})
