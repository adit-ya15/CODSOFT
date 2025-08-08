let expression = "";

function press(value) {
  if (expression === "0" && !isNaN(value)) {
    expression = value;
  } else {
    expression += value;
  }
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch {
    expression = "";
    document.getElementById("display").innerText = "Error";
  }
}

function clearDisplay() {
  expression = "";
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = expression || "0";
}
