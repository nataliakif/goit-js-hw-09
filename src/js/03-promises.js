import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startButton: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.startButton.addEventListener('submit', onSubmit);

function onSubmit(event){
  event.preventDefault();
  const delay = refs.delay.valueAsNumber;
  const step = refs.step.valueAsNumber;
  const amount = refs.amount.valueAsNumber; 
   makePromise(delay, step, amount);
}
function makePromise(delay, step, amount){
let newDelay = delay;
  for (let i=1; i<=amount; i+=1){
    createPromise(i, newDelay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    newDelay += step;
  }

}
function createPromise(position, delay) {
  console.log(position, delay);
  const shouldResolve = Math.random() > 0.3;
 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

