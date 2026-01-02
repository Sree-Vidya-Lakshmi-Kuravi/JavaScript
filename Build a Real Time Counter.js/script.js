const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxChars = 50;

textInput.addEventListener("input", () => {
  let text = textInput.value;

  if (text.length > maxChars) {
    text = text.slice(0, maxChars);
    textInput.value = text;
  }

  charCount.textContent = `Character Count: ${text.length}/50`;

  // Turn text red at 50 characters
  if (text.length === maxChars) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});
