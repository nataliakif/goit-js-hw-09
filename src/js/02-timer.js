
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs ={
    dateTime: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
} 
    refs.startBtn.disabled = true;
    let inputDate;
    
    function timeCheaker(date){
        if(date <= Date.now()){
            window.alert('Please choose a date in the future');
        }
       
        refs.startBtn.disabled = false;
        refs.dateTime.disabled =true;
        inputDate = date;

    }

refs.startBtn.addEventListener('click', startTimer);

function startTimer(){
    setInterval(() => {
        const leftTime = convertMs(inputDate - Date.now());
        convertMs(leftTime); 
        changeTextContent(leftTime);
      }, 1000);
    
  
}
function changeTextContent({ days, hours, minutes, seconds }){
    refs.timerDays.textContent = pad(days);
    refs.timerHours.textContent = pad(hours);
    refs.timerMinutes.textContent = pad(minutes);
    refs.timerSeconds.textContent = pad(seconds);
  }
  
  function pad(value) {
    return String(value).padStart(2, '0');
  }
 

flatpickr(refs.dateTime, options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  