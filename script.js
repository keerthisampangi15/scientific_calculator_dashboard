
let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let clickSound = document.getElementById('clickSound');

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function appendToDisplay(value) {
  playSound();
  if (value === '^') {
    display.value += '**';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  playSound();
  display.value = '';
}

function deleteLast() {
  playSound();
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  playSound();
  try {
    let result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

function toggleTheme() {
  let body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
}
