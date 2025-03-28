const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete"); // Select the delete button

digits.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

equalButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1); 
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        // If the key is a number or a decimal point
        display.value += key;
    } else if (["+", "-", "*", "/"].includes(key)) {
        // If the key is an operator
        display.value += key;
    } else if (key === "Enter") {
        // If the Enter key is pressed, calculate the result
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else if (key === "Backspace") {
        // If the Backspace key is pressed, delete the last character
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        // If the Escape key is pressed, clear the display
        display.value = "";
    }
});