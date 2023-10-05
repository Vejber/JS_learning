let timer = document.getElementById('timer');
let start = document.getElementById('startBtn');
let pause = document.getElementById('pauseBtn');
let reset = document.getElementById('resetBtn');
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

start.addEventListener('click', () => {
    interval = setInterval(timeGo, 1000);
    start.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
});

pause.addEventListener('click', () => {
    clearInterval(interval);
    start.disabled = false;
    pause.disabled = true;
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = '00:00:00';
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
});


function timeGo() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}