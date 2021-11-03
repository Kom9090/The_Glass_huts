//label-top
document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelectorAll(".input-form");
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", function (e) {
            input[i].previousElementSibling.classList.add("_focus-input");
        });
        input[i].addEventListener("blur", function (e) {
            if (input[i].value === "") {
                input[i].previousElementSibling.classList.remove("_focus-input");
            }
        });
    }
});

//валидация

// document.addEventListener("DOMContentLoaded", () => {
//     "use strict";
//     const forms = document.forms;

//     for (let n = 0; n < forms.length; n++) {

//         const form = forms[n];
//         const inputs = form.querySelectorAll("input");

//         for (let i = 0; i < inputs.length; i++) {

//             let input = inputs[i];
//             let err = document.querySelector(`#${input.id} + span.errors`);
//             const password = form.querySelector(".password");
//             const confirmPassword = form.querySelector(".passwordConfirm");
//             let helperChange = document.querySelector(`#${input.id} ~ span.helper-text`);

//             if (confirmPassword) {

//                 input.addEventListener("blur", function () {
//                     if (input == confirmPassword) {
//                         if (input.validity.valueMissing) {
//                             hideError(input, err);
//                         }
//                         else if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                         }
//                         else if (input.validity.valid || input.validity.valueMissing) {
//                             hideError(input, err);
//                         } else {
//                             showErrorBlur(input, err);
//                         }
//                     }
//                     else if (input.validity.valid || input.validity.valueMissing) {
//                         hideError(input, err);
//                     } else {
//                         showErrorBlur(input, err);
//                     }
//                 });
//                 input.addEventListener("input", function () {
//                     if (input == confirmPassword) {
//                         if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                             input.classList.remove("_valid");
//                             helperChange.textName = "helper-check";
//                             helperChange.textContent = "?";
//                         }
//                         else if (input.validity.valid) {
//                             input.classList.add("_valid");
//                             helperChange.className = "helper-check";
//                             helperChange.textContent = "+";
//                             err.textContent = "";
//                             err.className = "errors";
//                         } else {
//                             hideValid(input, err, helperChange);
//                         }
//                     }
//                     else if (input.validity.valid) {
//                         input.classList.add("_valid");
//                         err.textContent = "";
//                         if (input !== document.querySelector(".checkbox")) {
//                             helperChange.className = "helper-check";
//                             helperChange.textContent = "+";
//                         }
//                     } else {
//                         hideValid(input, err, helperChange);
//                     }
//                 });

//                 form.addEventListener("submit", formSend);
//                 async function formSend(e) {
//                     if (input == confirmPassword) {
//                         if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                             input.classList.remove("_valid");
//                             helperChange.textName = "helper-check";
//                             helperChange.textContent = "?";
//                             e.preventDefault();
//                         }
//                         else if (!input.validity.valid) {
//                             showErrorSubmit(input, err);
//                             e.preventDefault();
//                         }
//                     }
//                     else if (!input.validity.valid || confirmPassword.value !== password.value) {
//                         showErrorSubmit(input, err);
//                         e.preventDefault();
//                     }
//                     else if (inputs[0].validity.valid && inputs[1].validity.valid && inputs[2].validity.valid && inputs[3].validity.valid && inputs[4].validity.valid && confirmPassword.value == password.value) {
//                         e.preventDefault();
//                         form.classList.add("_sending");
//                         let response = await fetch("sendmail.php", {
//                             method: "POST"
//                         });
//                         if (response.ok) {
//                             let result = await response.json();
//                             alert(result.message);
//                             form.reset();
//                             form.classList.remove("_sending");
//                         }
//                         else {
//                             alert("Ошибка");
//                             form.classList.remove("_sending");
//                         }
//                     }
//                 }


//             }

//             else if (input !== document.querySelector(".check-m")) {

//                 input.addEventListener("blur", function () {
//                     if (input.validity.valid || input.validity.valueMissing) {
//                         hideError(input, err)
//                     } else {
//                         showErrorBlur(input, err);
//                     }
//                 });


//                 input.addEventListener("input", function () {
//                     if (input.validity.valid) {
//                         input.classList.add("_valid");
//                         err.textContent = "";
//                     } else {
//                         err.textContent = "";
//                         err.className = "errors";
//                         input.classList.remove("_valid");
//                     }
//                 });


//                 form.addEventListener("submit", formSend);
//                 async function formSend(e) {
//                     if (!input.validity.valid) {
//                         showErrorSubmit(input, err);
//                         e.preventDefault();
//                     }
//                     else if (inputs[0].validity.valid && inputs[1].validity.valid) {
//                         e.preventDefault();
//                         form.classList.add("_sending");
//                         let response = await fetch("serv/server.php", {
//                             method: "POST",
//                             body: data
//                         });
//                         if (response.ok) {
//                             let result = await response.text();

//                             let success = document.createElement("div.succses");
//                             document.querySelector(".popap-in").classList.add("_result");
//                             success.innerHTML = `<p>Авторизация успешна. ${result.message}</p> <button>Ок</button>`;
//                             form.replaceWith(success);

//                         }
//                         else {
//                             alert("Ошибка");
//                             form.classList.remove("_sending");
//                         }

//                     }
//                 }
//             }
//         }

//         function showErrorBlur(input, err) {

//             if (input.validity.tooShort) {
//                 err.textContent = `Введите минимум ${input.minLength} символов.`;
//             }

//             else if (input.validity.typeMismatch) {
//                 err.textContent = 'Не соотвествие формату поля';
//             }

//             else if (input.validity.patternMismatch) {
//                 err.textContent = 'Не соотвествие формату поля, смотрите требования в подсказке';
//             }

//             showInvalid(input, err);
//         }


//         function showErrorSubmit(input, err) {

//             if (input.validity.valueMissing) {
//                 if (input == document.querySelector(".checkbox")) {
//                     err.textContent = 'Подтвердите согласие на обработку данных';
//                 }
//                 else {
//                     err.textContent = 'Поле не должно быть пустым';
//                 }
//             }

//             else if (input.validity.patternMismatch) {
//                 err.textContent = 'Не соотвествие формату поля, смотрите требования в подсказке';
//             }

//             else if (input.validity.tooShort) {
//                 err.textContent = `Введите минимум ${input.minLength} символов.`;
//             }

//             else if (input.validity.typeMismatch) {
//                 err.textContent = 'Не соотвествие формату поля';
//             }


//             showInvalid(input, err);
//         }

//         function hideError(input, err) {
//             err.textContent = "";
//             err.className = "errors";
//             input.classList.remove("_active");
//         }

//         function hideValid(input, err, helperChange) {
//             err.textContent = "";
//             err.className = "errors";
//             input.classList.remove("_valid");
//             if (input !== document.querySelector(".checkbox")) {
//                 helperChange.className = "helper-text";
//                 helperChange.textContent = "?";
//             }
//         }

//         function showInvalid(input, err) {
//             err.className = 'errors _null';
//             input.classList.add("_active");
//         }

//     }
// });