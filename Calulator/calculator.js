//Grabs the display box
const displayBox = document.querySelector('.display-box');

//Grabs all button except the clear and equal buttons
const numberButtons = document.querySelectorAll('.main button:not(.equal-button,.clear-button)');

//Grabs the clear button
const clearButton = document.querySelector('.clear-button');

//Grabs the equal button
const equalButton = document.querySelector('.equal-button');

//Clears the display box when clear button is pressed
clearButton.addEventListener('click', () => {
  displayBox.value = '';
});

//Goes through each button and displays its value in the display box except clear and equal
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    displayBox.value += button.textContent;
  });
});

//It evaluates the calculation the user is looking for and gives you the result (eval() is not recommemded but for this small application works)
equalButton.addEventListener('click', () => {
  try {
    const result = eval(displayBox.value);
    displayBox.value = result.toFixed(2);
  } catch (error) {
    displayBox.value = 'Error';
  }
});

