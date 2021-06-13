
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minutesEl = document.querySelector('[data-value="mins"]');
const secondsEl = document.querySelector('[data-value="secs"]');

// const startTime = new Date(2019, 6, 17, 0, 0, 0);

const countdownTimer = {
  start() {
    const finalDate = new Date(2026, 6, 26, 0, 0, 0).getTime();
    
    setInterval(() => {
      const currentDate = Date.now();
      const differenceTime = finalDate - currentDate ;
      const { days, hours, mins, secs } = createsTime(differenceTime);
      console.log(`${days}:${hours}:${mins}:${secs}`);
      displaysDate({ days, hours, mins, secs });
    }, 1000);

  }
}
countdownTimer.start();

function padTime(value) {
  return String(value).padStart(2, '0')
}

function createsTime(time) {
  const days = padTime(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = padTime(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = padTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = padTime(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function displaysDate({ days, hours, mins, secs }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${mins}`;
  secondsEl.textContent = `${secs}`;
}

