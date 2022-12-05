"use strict";

let mathExpression = '';
let displayElement = document.getElementById('displayInput');
let labelElement = document.getElementById('labelDisplayInput');

displayElement.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  }
});

let btnTheme = document.getElementById("btnTheme");
let linkTheme = document.getElementById("linkTheme")

btnTheme.addEventListener("click", function() {changeTheme();})

function changeTheme() {
  let lightTheme = "./styles/light-style.css"
  let darkTheme = "./styles/dark-style.css"

  let currentTheme = linkTheme.getAttribute("href");

  if (currentTheme == lightTheme) {
    linkTheme.href = darkTheme;
    btnTheme.innerText = "🌞";
  } else {
    linkTheme.href = lightTheme;
    btnTheme.innerText = "🌚";
  }
}

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

  let result;
  let syntaxError = false;
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