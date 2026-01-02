// 1️⃣ Fix syntax errors in the array
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020"
];

// 2️⃣ Fix ReferenceError (Math must be capitalized)
// 3️⃣ Round down the random index
function getRandomIndex() {
  return Math.floor(Math.random() * darkColorsArr.length);
}

// 4️⃣ Fix TypeError by using correct method name
const body = document.querySelector("body");

// 5️⃣ Fix element selection by id
const bgHexCodeSpanElement = document.getElementById("bg-hex-code");

// 6️⃣ Fix button selector (check index.html for correct id)
const btn = document.getElementById("btn");

// 7️⃣ Modify color variable to use random color from array
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  body.style.backgroundColor = color;
  bgHexCodeSpanElement.textContent = color;
}

// 8️⃣ Fix event listener by passing function reference
btn.addEventListener("click", changeBackgroundColor);
