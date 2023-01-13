const studyTitle = document.getElementById('study');
const restTitle = document.getElementById('rest');

let studyTime = 25;
let restTime = 5;

let seconds = '00';

// display conntrol
window.onload = () => {
    document.getElementById('min').innerHTML = studyTime;
    document.getElementById('secs').innerHTML = seconds;

    studyTitle.classList.add('active');
}

// Timer func
function start() {
    // change time
    seconds = 59;

    let studyMin = studyTime - 1;
    let restMin = restTime - 1;

    restCount = 0;

    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById('min').innerHTML = studyMin;
        document.getElementById('secs').innerHTML = seconds;

        // start
        seconds = seconds - 1;
    }

    // start countdown
    setInterval(timerFunction, 1000);
}