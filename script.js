let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timer = setInterval(function () {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}