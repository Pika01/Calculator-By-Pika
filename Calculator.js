const display = document.querySelector("#display");
const body = document.body;
const themeBtn = document.querySelector("#mode");

themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  if (body.classList.contains('dark')){
    setDarkMode();
  } else {
    setLightMode();
  }
}

function setDarkMode() {
  body.classList.add('dark');
  body.classList.remove('light');
  display.classList.add('darkDisplay');
  display.classList.remove('lightDisplay');
}

function setLightMode() {
  body.classList.remove('dark');
  body.classList.add('light');
  display.classList.add('lightDisplay');
  display.classList.remove('darkDisplay');
}

function appendToDisplay(input){
  display.value += input;
  navigator.vibrate([50,50,50,50,50]);
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    display.value = eval(display.value);
  } catch(error){
      display.value = "Error";
    }
  }

function deleteLast(){
  display.value = display.value.slice(0,-1);
}
