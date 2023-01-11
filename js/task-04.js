let counterValue = 0;
const spanEl = document.querySelector('#value')


// Decrement 
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnDecrementClick = () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
};
btnDecrement.addEventListener("click", btnDecrementClick);

// Increment
const btnIncrement = document.querySelector('button[data-action="increment"]')
const btnIncrementClick = () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
};
btnIncrement.addEventListener("click", btnIncrementClick);