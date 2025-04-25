const display = document.getElementById("display");

function append(value) {
  if (value === "%") {
    display.value += "/100 *100";
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Null";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    append(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (key === "Escape") {
    clearDisplay();
  }
});



