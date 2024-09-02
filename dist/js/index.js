"use strict";
const display = document.querySelector('.display');
const increaseButtonElement = document.querySelector('.increase-button');
const decreaseButtonElement = document.querySelector('.decrease-button');
const resetButtonElement = document.querySelector('.reset-button');
let currentNumber = 0;
function updateDisplay() {
    if (display)
        return (display.textContent = currentNumber.toString());
}
function addClickListener({ buttonElement, action }) {
    if (buttonElement)
        return buttonElement.addEventListener('click', action);
}
addClickListener({
    buttonElement: increaseButtonElement,
    action: () => {
        currentNumber++;
        updateDisplay();
    },
});
addClickListener({
    buttonElement: decreaseButtonElement,
    action: () => {
        currentNumber--;
        updateDisplay();
    },
});
addClickListener({
    buttonElement: resetButtonElement,
    action: () => {
        currentNumber = 0;
        updateDisplay();
    },
});
