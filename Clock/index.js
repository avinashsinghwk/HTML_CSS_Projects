let h = document.getElementById("hour")
let m = document.getElementById("minute")
let s = document.getElementById("second")
let ampm = document.getElementById('ampm')

function timeShower(){
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let second = date.getSeconds()

    let AMPM = (hour >= 12) ? 'PM' : 'AM'

    hour = (hour > 12) ?(hour - 12) : hour 
    if(hour === 0 || hour === 12){
        hour = `${12}`
    }
    else if (hour < 10) {
        hour = `0${hour}`
    }
    else{
        hour = `${getHours}`
    }
    second = (second < 10) ? `0${second}` : `${second}`
    min = (min < 10) ? `0${min}` : `${min}`


    h.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = second;
    ampm.innerHTML = AMPM;
}

timeShower()

setInterval(timeShower, 1000)