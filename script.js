const input = document.querySelector('#input');
const button = document.querySelector('#button');
const countdown = document.querySelector('#countdown');
const relaxButton = document.querySelector('#relaxButton');
const player = document.querySelector('#player');

document.addEventListener('DOMContentLoaded', () => {
    player.pause()
})


button.addEventListener('click', timer);


input.addEventListener('keypress', (e)=> {
    if (e.keyCode === 13) {
        timer()
    }

})

function timer() {
    let time = Number(input.value);

    function calculateTime() {
        time--

        countdown.textContent = `${time}`;

        button.style.display = 'none'
        input.style.display = 'none'
        relaxButton.style.display = 'none'
        
        if (time <= 0) {
            stopTimer();
            time = 0;
            relaxButton.style.display = 'block';
            player.pause()
        }

            function stopTimer() {
                clearInterval(timerID)
                button.style.display = 'block'
                input.style.display = 'block'
                relaxButton.style.display = 'block'
            }

    }

    let timerID = setInterval(calculateTime, 1000);
    player.play()

}

