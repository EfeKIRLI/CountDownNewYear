const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")


const newYears = "1 jan 2024";

function countdown () {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearDate-currentDate)/1000

    const days = Math.floor(Totalseconds / 3600 /24) 
    const hours = Math.floor(Totalseconds / 3600 ) % 24 
    const minutes = (Math.floor(Totalseconds / 60 ) % 24 ) %60;
    const seconds = Math.floor(Totalseconds%60) 
    // console.log(newYearDate-currentDate)
    // console.log(days,hours,minutes,seconds)


//  daysEl.innerHTML  = days
//  hoursEl.innerHTML = hours
//  minutesEl.innerHTML = minutes
//  secondsEl.innerHTML = seconds

daysEl.innerHTML  = formatTime(days)
hoursEl.innerHTML = formatTime(hours)
minutesEl.innerHTML = formatTime(minutes)
secondsEl.innerHTML = formatTime(seconds)
}

function formatTime (time){
    return time < 10 ? (`0${time}`):time
}
// initial call
countdown()
setInterval(countdown,1000)