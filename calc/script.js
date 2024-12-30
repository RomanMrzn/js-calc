let currentInput = "";
let previousInput = "";
let operator = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  document.getElementById("display").value = "";
}

function handleOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  document.getElementById("display").value = currentInput;
}
