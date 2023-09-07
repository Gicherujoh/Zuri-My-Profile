const dayOfWeek= document.getElementById('dayOfweek')

const weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentDate= new Date();
const currentDay = currentDate.getDay();
const currentDayOfweek= weekDays[currentDay]

dayOfWeek.textContent = `Today is ${currentDayOfweek}`

function getCurrentUtcTime(){
    const now = new Date();
    const utcTime= now.toISOString();
    return  utcTime;
}
function  Display(){
    const utcTimeElement= document.getElementById('utctime')
    const utcTime = getCurrentUtcTime();
    utcTimeElement.textContent= `Current UTC Time:${utcTime}`
}
window.onload= Display
