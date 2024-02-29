var start = document.getElementById("start");
var stop = document.getElementById("stop");
stop.style.display = "none"; 

function counter() {
    var hour = 0;
    var minute = 0;
    var second = 0;
    start.innerHTML = "Starting..."
    timer = setInterval(function() {
        second++;
        // start.innerHTML = second;
        start.innerHTML = hour + ":" + minute + ":" + second;
        if (second == 59) {
            second = 0;
            minute++;
        }else if (minute == 59) {
            minute = 0;
            hour++;
        }
        stop.style.display = "block";
    }, 1000);
}
function stopped() {
    start.innerHTML = "Stopped!";
    clearInterval(timer);
    setInterval(function() {
    if (start.innerHTML == "Stopped!") {
        start.innerHTML = "Start"
    }
}, 1500);
stop.style.display = "none";
}
    


    