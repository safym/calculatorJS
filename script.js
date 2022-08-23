var displayElement = document.getElementById('displayInput');
var labelElement = document.getElementById('labelDisplayInput');

var mathExpression = '';

function pressBtn(value) {
  mathExpression = mathExpression + value;
  updateDisplay(mathExpression);
}
function deleteLastCharacter() {
  let stringExpression = String(mathExpression);

  if (stringExpression.length != 0) {
    mathExpression = stringExpression.substring(0, stringExpression.length - 1);
    updateDisplay(mathExpression);
    labelElement.innerText = '\u0000'
  }
}

function clearPress() {
  mathExpression = '';
  labelElement.innerText = '\u0000'
  updateDisplay(mathExpression);
}

function equalPress() {
  mathExpression = (displayElement.value);

  var result;
  var syntaxError = false;
  try {
    result = (eval(mathExpression));
  } catch (e) {
    if (e instanceof SyntaxError) {
      syntaxError = true;
    }
  }

  if (isFinite(result)) {
    mathExpression = (eval(displayElement.value));
    labelElement.innerText = '\u0000'
  } else {
    if(syntaxError) {
      labelElement.innerText = 'Ошибка!'
    } else {
      labelElement.innerText = 'На ноль делить нельзя!'
    }
  }
  
  updateDisplay(mathExpression);
}

function updateDisplay(result) {
  displayElement.value = result;
}