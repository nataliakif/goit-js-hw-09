
let intervalId = null;

const refs ={
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
  }

  refs.startBtn.addEventListener('click', onclickStartButton);
  refs.stopBtn.addEventListener('click', onclickStopButton);
  refs.stopBtn.disabled = true;

function onclickStartButton(event){
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    intervalId = setInterval(changeBackgroundColor, 1000);
   
   
};
  function onclickStopButton(event){
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(intervalId);
 
   }
  function changeBackgroundColor(){
    refs.body.style.backgroundColor = getRandomHexColor();

  }
    
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
