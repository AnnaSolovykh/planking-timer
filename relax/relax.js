const countdown = document.querySelector('#countdown');
const button = document.querySelector('#button');
const player = document.querySelector('#player');
const playButton = document.querySelector('#playButton');

let time = 10;
let timerID;

function calculateTime() {
    time--
    countdown.textContent = `${time}`;

    if (time <= 0) {
        stopTimer();
        time = 0;
        countdown.textContent = " ";
        button.style.display = "block";
    }
    function stopTimer() {
        clearInterval(timerID);
    }
}

timerID = setInterval(calculateTime, 1000);
player.play()

button.addEventListener('click', ()=> {
    history.back()
})

let numberOfClick = 0;
playButton.addEventListener('click', ()=> {
    player.play()
    numberOfClick++

    if (numberOfClick%2 != 0) {
        playButton.textContent = "PAUSE";
    }

    else {
        playButton.textContent = "RESUME";
        player.pause();
    }
})