const dayOfWeek= document.getElementById('dayOfweek')

const weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentDate= new Date();
const currentDay = currentDate.getDay();
const currentDayOfweek= weekDays[currentDay]

dayOfWeek.textContent = `${currentDayOfweek}`
const currentUtc = document.getElementById('utctime')
function Display(){
    const currentUTCTimeInMilliseconds = new Date().getTime();
    
    currentUtc.textContent = `${currentUTCTimeInMilliseconds}`

}
setInterval(Display,1000)
window.onload= Display
