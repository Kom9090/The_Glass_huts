export const formValidation = (elem) => {
  const form = document.forms[elem];
  const inputs = form.querySelectorAll('.input[required]');
  const checkbox = form.querySelector('.checkbox');
  // type error ====================================================
  const showError = (item) => {
    const input = item;
    switch (true) {
      case input.validity.valueMissing:
        input.nextElementSibling.textContent = 'This field is required';
        break;
      case input.validity.tooShort:
        input.nextElementSibling.textContent = `Minimum length: ${input.minLength} symbols`;
        break;
      case input.validity.typeMismatch:
        input.nextElementSibling.textContent = 'Does not conform to the format';
        break;
      default:
        input.nextElementSibling.textContent = 'This field is required';
    }
  };
  // remove error ==================================================
  const removeError = (item) => {
    const input = item;
    if (input.classList.contains('_invalid')) {
      input.classList.remove('_invalid');
    }
    input.nextElementSibling.textContent = '';
  };
  // add valid =====================================================
  const addValid = (item) => {
    const input = item;
    if (input.validity.valid) {
      input.classList.add('_valid');
    }
  };
  // remove =======================================================
  const removeValid = (item) => {
    const input = item;
    if (input.classList.contains('_valid')) {
      input.classList.remove('_valid');
    }
  };
  // validation ====================================================
  const inputValidation = (input) => {
    if (!input.validity.valid) {
      showError(input);
      if (input.classList.contains('_valid')) {
        input.classList.remove('_valid');
      }
      input.classList.add('_invalid');
    }
  };
  // err ===========================================================
  const isError = () => {
    let error = false;
    for (let i = 0; i < inputs.length; i += 1) {
      if (!inputs[i].validity.valid) {
        error = true;
        break;
      }
    }
    return error;
  };
  // send ==========================================================
  async function formSend(event) {
    event.preventDefault();
    inputs.forEach(input => {
      inputValidation(input);
    });
    let error = isError();
    if (!error) {
      form.classList.add('_sending');
      let response = await fetch('../index.html', {
        method: 'POST'
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Error');
        form.classList.remove('_sending');
      }
    }
  }
  // submit =========================================================
  form.addEventListener('submit', formSend);
  // blur input focus ===============================================
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value !== '') {
        inputValidation(input);
      } else if (input.value === '') {
        removeValid(input);
      } else {
        addValid(input);
      }
    });
    input.addEventListener('focus', () => {
      removeError(input);
    });
    input.addEventListener('input', () => {
      addValid(input);
    });
    if (checkbox) {
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          checkbox.nextElementSibling.textContent = '';
        }
      });
    }
  });
};
