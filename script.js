const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

// Append digit or decimal point to the display
digits.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// Append operator to the display
operators.forEach(button => {
    button.addEventListener("click", () => {
        const lastChar = display.value.slice(-1);
        if (!["+", "-", "*", "/"].includes(lastChar)) {
            display.value += button.textContent;
        }
    });
});

// Evaluate the expression when "=" is clicked
equalButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value.replace(/[^0-9.+\-*/]/g, ""));
    } catch (error) {
        display.value = "Error";
    }
});

// Clear the display
clearButton.addEventListener("click", () => {
    display.value = "";
});

// Delete the last character from the display
deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        display.value += key;
    } else if (["+", "-", "*", "/"].includes(key)) {
        const lastChar = display.value.slice(-1);
        if (!["+", "-", "*", "/"].includes(lastChar)) {
            display.value += key;
        }
    } else if (key === "Enter") {
        try {
            display.value = eval(display.value.replace(/[^0-9.+\-*/]/g, ""));
        } catch (error) {
            display.value = "Error";
        }
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        display.value = "";
    }
});