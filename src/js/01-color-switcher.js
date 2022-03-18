const refs ={
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
  }
  
  refs.startBtn.addEventListener('click', onclickStartButton);
  refs.stopBtn.addEventListener('click', onclickStopButton);
  
   function onclickStartButton(event){
     const changeColor = getRandomHexColor() ;
     refs.body.style.backgroundColor = changeColor;
  }
  function onclickStopButton(event){
    const changeColor = getRandomHexColor() ;
    refs.body.style.backgroundColor = changeColor;
 }
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
