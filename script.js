var displayElement = document.getElementById("displayOutput");

var mathExpression = '';

function pressBtn(value) {
  // console.log(typeof mathExpression, mathExpression)
  // console.log(typeof value, value)

  mathExpression = mathExpression + value;
  updateDisplay(mathExpression);
}
function deleteLastCharacter() {
  let stringExpression = String(mathExpression);

  if (stringExpression.length != 0) {
    mathExpression = stringExpression.substring(0, stringExpression.length - 1);
    updateDisplay(mathExpression);
  }
}

function clearPress() {
  mathExpression = '';
  updateDisplay(mathExpression);
}

function equalPress() {
  mathExpression = (eval(mathExpression));

  // console.log("equal: ", typeof mathExpression, mathExpression)
  updateDisplay(mathExpression);
}

function updateDisplay(result) {
  displayElement.innerText = result;
}