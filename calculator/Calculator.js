document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('dis');
    const buttons = document.querySelectorAll('.button input[type="button"]');

    let currentInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === '=') {
                calculateResult();
            } else if (value === 'Clear') {
                clearDisplay();
            } else if (value === 'Del') {
                deleteLastCharacter();
            } else {
                appendToDisplay(value);
            }
        });
    });

    function appendToDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '0';
    }

    function deleteLastCharacter() {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
        currentInput = display.value;
        if (display.value === '') {
            display.value = '0';
        }
    }
}

    function calculateResult() {
        if (currentInput.includes('+')) {
            const operands = currentInput.split('+');
            if (operands.length === 2) {
                const result = parseFloat(operands[0]) + parseFloat(operands[1]);
                display.value = result;
                currentInput = result.toString();
            }
        } else if (currentInput.includes('-')) {
            const operands = currentInput.split('-');
            if (operands.length === 2) {
                const result = parseFloat(operands[0]) - parseFloat(operands[1]);
                display.value = result;
                currentInput = result.toString();
            }
        } else if (currentInput.includes('*')) {

            const operands = currentInput.split('*');
            if (operands.length === 2) {
                const result = parseFloat(operands[0]) * parseFloat(operands[1]);
                display.value = result;
                currentInput = result.toString();
            }
        } else if (currentInput.includes('/')) {
            const operands = currentInput.split('/');
            if (operands.length === 2) {
                const divisor = parseFloat(operands[1]);
                if (divisor === 0) {
                    display.value = 'Error';
                    currentInput = '';
                } else {
                    const result = parseFloat(operands[0]) / divisor;
                    display.value = result;
                    currentInput = result.toString();
                }
            }
        }
    }
});