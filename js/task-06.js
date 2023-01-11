const input = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === Number(input.getAttribute('data-length'))) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}

input.addEventListener('blur', onInputBlur);