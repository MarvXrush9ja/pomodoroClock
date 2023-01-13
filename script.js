let studyTitle = document.getElementById('study');
let restTitle = document.getElementById('rest');

let studyTime = 25;
let restTime = 5;

let seconds = "00"

// display conntrol
window.onload = () => {
    document.getElementById('min').innerHTML = studyTime;
    document.getElementById('secs').innerHTML = seconds;

    studyTitle.classList.add('active');
}

// Timer func
function start() {
    // change time
    seconds = 3;

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

        if(seconds === 0 ){
            studyMin = studyMin -1;
            if (studyMin === -1 ) {
                if(restCount % 2 === 0 ){
                    // start count
                    studyMin = restMin;
                    restCount++;
                } else {
                // continue
                studyMin = studyTime;
                restCount++
            } 
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000);
}