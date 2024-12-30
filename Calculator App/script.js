let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

// Handle button clicks
buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        handleInput(e.target.textContent);
    });
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
    const validKeys = "0123456789+-*/%=.C";
    if (validKeys.includes(e.key) || e.key === "Backspace" || e.key === "Enter") {
        if (e.key === "Backspace") {
            handleInput("<");
        } else if (e.key === "Enter") {
            handleInput("=");
        } else {
            handleInput(e.key);
        }
    }
});

// Function to process input
function handleInput(value) {
    if (value === "C") {
        input.innerText = "";
    } else if (value === "<") {
        input.innerText = input.innerText.slice(0, -1);
    } else if (value === "=") {
        try {
            input.innerText = eval(input.innerText);
        } catch {
            input.innerText = "Error";
        }
    } else {
        input.innerText += value;
    }

    // Programmatically scroll to the end of the content
    input.scrollLeft = input.scrollWidth;
}
