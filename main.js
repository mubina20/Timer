let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt_reset");
let intervalId;

buttonStart.onclick = function() { 
    clearInterval(intervalId);
    intervalId = setInterval(operateTimer, 10)
} 

buttonStop.onclick = function(){
    clearInterval(intervalId); // 멈춘다.
}

buttonReset.onclick = function(){
    clearInterval(intervalId);
    tenMillis = 0;
    appendTens.textContent = "00";
    seconds = 0;
    appendSeconds.textContent = "00";
    minutes = 0;
    appendMinutes.textContent = "00";
}

// 10ms 마다 시간에 대한 숫자 증가한다
function operateTimer(){
    tenMillis++;
    appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis;
    if(tenMillis > 99){
        seconds++;
        appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
        tenMillis = 0;
        appendTens.textContent = "000";
    }

    if(seconds > 59){
        minutes++;
        appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
        seconds = 0;
        appendSeconds.textContent = "00";
    }
}