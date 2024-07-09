// Immediately Invoked Function Expression (IIFE) to avoid polluting global scope
(function() {
// DOM elements
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.querySelector('#clear');

// Variable to keep track of the current input and result
    let currentInput = '';
    let result = 0;

// Function to update the display
    function updateDisplay(value) {
        display.textContent = value;
    }

// Event listener for button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

// If the button is '=', calculate the result
        if (value === '=') {
            try {
                result = eval(currentInput);
                updateDisplay(result);
                currentInput = result.toString();
            } catch (error) {
                updateDisplay('Error');
                currentInput = '';
            }
        } else {
// Append the value to the current input and update the display
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});

// Event listener for the clear button
    clearButton.addEventListener('click', () => {
        currentInput = '';
        result = 0;
        updateDisplay(0);
    });

// Initialize display
    updateDisplay(0);
})();
