const display = document.querySelector('.display') as HTMLElement | null;

const increaseButtonElement = document.querySelector('.increase-button') as HTMLButtonElement | null;
const decreaseButtonElement = document.querySelector('.decrease-button') as HTMLButtonElement | null;
const resetButtonElement = document.querySelector('.reset-button') as HTMLButtonElement | null;

interface AddClickListenerProps {
  buttonElement: HTMLButtonElement | null;
  action: () => void;
}

let currentNumber: number = 0;
function updateDisplay() {
  if (display) return (display.textContent = currentNumber.toString());
}

function addClickListener({ buttonElement, action }: AddClickListenerProps) {
  if (buttonElement) return buttonElement.addEventListener('click', action);
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
