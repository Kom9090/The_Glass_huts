// ================= add box-shadow header, if confirm page ================

if (document.querySelector(".confirm")) {
    document.querySelector(".header__wrapper").style.boxShadow = "2px 0px 20px rgba(0, 0, 0, 0.1)";
}

//================ tel mask ==============================

window.addEventListener("DOMContentLoaded", function() {

    const telInput = document.querySelector("#phone");

    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;

    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+44 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 6 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 6)  {
            this.value = ""
            telInput.previousElementSibling.classList.remove("_focus-input");
        }
    }
    
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
    

  });

});

//=========================================================

window.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll(".select");
    const optionLists = document.querySelectorAll(".option-list");
    const selectLang = document.querySelector(".select-lang");
    const selectTel = document.querySelector(".select-code");
    const selectCountry = document.querySelector(".country");
    const card = document.querySelector(".card");
    const langOptions = document.querySelectorAll(".select-lang__option");
    const codeOptions = document.querySelectorAll(".select-code__option");
    const countryOptions = document.querySelectorAll(".country__option");
    const cardOptions = document.querySelectorAll(".card__option");

    selects.forEach(function(select, i) {
        let selectParent = select.parentElement;

        select.addEventListener("click", () => {
            optionLists[i].classList.toggle("_show-list");
            select.classList.toggle("_selected");            
        });
        
        localChanges(selectParent, select);
        
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".select")) {
                for (let n = 0; n < optionLists.length; n++) {
                    optionLists[n].classList.remove("_show-list");
                    select.classList.remove("_selected");
                }  
            }
        })
    });

    function localChanges(selectParent, select) {
        switch (selectParent) {
            case selectLang:
                langOptions.forEach(function(item) {
                    item.addEventListener("click", () => {
                        item.prepend(select.firstElementChild);
                        select.prepend(item.lastElementChild);
                        select.nextElementSibling.classList.remove("_show-list");
                        select.classList.remove("_selected");
                    });
                });
                break;
            case selectTel:
                codeOptions.forEach(function(item) {
                    item.addEventListener("click", () => {
                        select.append(item.firstElementChild);
                        item.append(select.firstElementChild);
                        select.nextElementSibling.classList.remove("_show-list");
                        select.classList.remove("_selected");
                    });
                });
                break;
            case selectCountry: 
                countryOptions.forEach(function(item) {
                    item.addEventListener("click", () => {
                        let countryValue = document.querySelector(".country__btn");
                        countryValue.value = item.firstElementChild.value;
                        countryValue.focus();
                    });
                });
                break;
            case card: 
            cardOptions.forEach(function(item) {
                item.addEventListener("click", () => {
                    let cardValue = document.querySelector(".card__btn");
                    cardValue.value = item.firstElementChild.value;
                    cardValue.focus();
                });
            });
            break;    
        }
    }
});
