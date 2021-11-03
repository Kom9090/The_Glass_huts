let langBtns = document.querySelectorAll(".select-lang__option");
const alllang = ["en", "ic", "ge"];

langBtns.forEach(function(langBtn) {
    langBtn.addEventListener("click", changeUrlLang);
    function changeUrlLang() {
        let lang = langBtn.firstElementChild.dataset.lang;
        location.href = window.location.pathname + "#" + lang;  
    }
});




