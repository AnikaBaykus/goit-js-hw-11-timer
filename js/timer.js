class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = new Date(targetDate).getTime();
    // console.log(this.targetDate);
    // this.onTick = onTick;
    this.selector = selector;
    this.daysEl = document.querySelector(`${selector} span[data-value="days"]`);
    this.hoursEl = document.querySelector(`${selector} span[data-value="hours"]`);
    this.minutesEl = document.querySelector(`${selector} span[data-value="mins"]`);
    this.secondsEl = document.querySelector(`${selector} span[data-value="secs"]`);
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const differenceTime = this.targetDate - currentDate;
      // console.log(differenceTime)
      this.createsTime(differenceTime);
    }, 1000);
  };

  padTime(value) {
      return String(value).padStart(2, '0')
  };
  
  createsTime(time) {
      const days = this.padTime(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.padTime(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.padTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.padTime(Math.floor((time % (1000 * 60)) / 1000));

    this.displaysDate({ days, hours, mins, secs });
  };
  
  displaysDate({ days, hours, mins, secs }) {
      this.daysEl.textContent = `${days}`;
      this.hoursEl.textContent = `${hours}`;
      this.minutesEl.textContent = `${mins}`;
      this.secondsEl.textContent = `${secs}`;
  };
}


const countdownTimer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 7, 2021'),
});

countdownTimer1.start();
