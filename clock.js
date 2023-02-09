function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    if(h < 10) {
        h = `0${h}`
    }
    if(m < 10) {
        m = `0${m}`
    }
    if(s < 10) {
        s = `0${s}`
    }

    var time = `${h}:${m}:${s}`;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();