import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  inputDate: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  daysData: document.querySelector('[data-days]'),
  hoursData: document.querySelector('[data-hours]'),
  minutesData: document.querySelector('[data-minutes]'),
  secondsData: document.querySelector('span[data-seconds]'),
  timerDiv: document.querySelector('.timer'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      refs.btnStart.disabled = false;
      Notiflix.Notify.success('Goog! You choose a date in the future');
    } else {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

class Timer {
  constructor({ onTick }) {
    this.timerID = null;
    this.isActiv = false;
    this.onTick = onTick;
  }

  startTimer() {
    if (this.isActiv) {
      return;
    }
    const selectedTime = fp.selectedDates[0].getTime();

    this.isActiv = true;
    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      if (deltaTime > 0) {
        const time = this.convertMs(deltaTime);
        this.onTick(time);
        }
    }, 1000);
    refs.btnStart.disabled = true;
  }
  timeNormal(value) {
    return String(value).padStart(2, '0');
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.timeNormal(Math.floor(ms / day));
    const hours = this.timeNormal(Math.floor((ms % day) / hour));
    const minutes = this.timeNormal(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.timeNormal(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }
}

const timer = new Timer({
  onTick: updateComponentsTimer,
});

function updateComponentsTimer({ days, hours, minutes, seconds }) {
  refs.daysData.textContent = `${days}`;
  refs.hoursData.textContent = `${hours}`;
  refs.minutesData.textContent = `${minutes}`;
  refs.secondsData.textContent = `${seconds}`;
}

const fp = flatpickr(refs.inputDate, options);
refs.btnStart.addEventListener('click', timer.startTimer.bind(timer));