let domElements;
let prepareDocument = () => {
    domElements = new DOMElements();
    domElements.addButton.addEventListener('click', addUserInput);
    domElements.subButton.addEventListener('click', subUserInput);
};

let addUserInput = (event) => {
    event.preventDefault();
    if (isNaN(parseInt(domElements.userInput.value))) return;
    let result = parseInt(domElements.resultUI.textContent) + parseInt(domElements.userInput.value);
    // console.log(typeOf(result));
    domElements.applyClassToResultUI(result);
    domElements.setText(domElements.resultUI, result);
    domElements.clearUserInput();
};
let subUserInput = (event) => {
    event.preventDefault();
    if (isNaN(parseInt(domElements.userInput.value))) return;
    let result = parseInt(domElements.resultUI.textContent) - parseInt(domElements.userInput.value);
    domElements.applyClassToResultUI(result);
    domElements.setText(domElements.resultUI, result);
    domElements.clearUserInput();
};



function DOMElements() {
    this.resultUI = document.querySelector('#result'),
    this.resultClassPos = 'positiv',
    this.resultClassNeg = 'negativ',
    this.addButton = document.querySelector('#add'),
    this.subButton = document.querySelector('#sub'),
    this.userInput = document.querySelector('#user-input'),
    this.applyClassToResultUI = (result) => {
        this.resultUI.className = (result >= 0) ? this.resultClassPos : this.resultClassNeg;
    },
    this.setText = (element, value) => {
        element.textContent = value;
    },
    this.clearUserInput = () => {
        this.userInput.value = '';
    }
};

document.addEventListener('DOMContentLoaded', prepareDocument);