let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector('.stop-watch h1');
let timer = null;
let stopBtn = document.querySelector('.buttons img:nth-child(1)')
let startBtn = document.querySelector('.buttons img:nth-child(2)');
let resetBtn = document.querySelector('.buttons img:nth-child(3)');

function stopWatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++
        }
    }
    let h = hours < 10 ? `0${hours}` : `${hours}`;
    let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let s = seconds < 10 ? `0${seconds}` : `${seconds}`;

    displayTime.textContent = `${h} : ${m} : ${s}`
};

function watchStart(){
    timer = setInterval(stopWatch, 1000)
};

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
});

startBtn.addEventListener('click', watchStart);

resetBtn.addEventListener('click', ()=> {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.textContent = "00 : 00 : 00"
}
);