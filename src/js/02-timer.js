
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    let timerId = null;
    const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            timeCheaker(selectedDates[0]);
        },
      };
    flatpickr(refs.dateTime, options);

    function timeCheaker(date){
        if(date <= Date.now()){
          Notify.failure('Please choose a date in the future');
          refs.startBtn.disabled = true;
        }
        else{
        refs.startBtn.disabled = false;
        refs.dateTime.disabled =true;
        inputDate = date;
        }
    }

refs.startBtn.addEventListener('click', startTimer);

function startTimer(){
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
      const leftMs =inputDate - Date.now();
      const leftTime = convertMs(leftMs);
      changeTextContent(leftTime);
      if(leftMs < 1000){
          clearInterval(timerId);
          return;
      }
        
      }, 1000);
     
  
}
function changeTextContent({ days, hours, minutes, seconds }){
    refs.timerDays.textContent = addLeadingZero(days);
    refs.timerHours.textContent = addLeadingZero(hours);
    refs.timerMinutes.textContent = addLeadingZero(minutes);
    refs.timerSeconds.textContent = addLeadingZero(seconds);
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

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
  
  