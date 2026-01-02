const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("filled");

        if (button.classList.contains("filled")) {
            button.innerHTML = "&#10084;"; // filled heart
        } else {
            button.innerHTML = "&#9825;"; // empty heart
        }
    });
});
