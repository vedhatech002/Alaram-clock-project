const selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
const setAlarmBtn = document.querySelector("button");
const content = document.querySelector(".content");

let alarmTime,isAlarmSet = false;
ringtone = new Audio("./assets/ringtone.mp3");

for(let i =12;i > 0;i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i =59;i >= 0;i--){
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i =2;i > 0;i--){
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option);
}

setInterval(()=>{
//  getting hours,mins,secs
let date = new Date(),
h = date.getHours(),
m = date.getMinutes(),
s = date.getSeconds(),
ampm = "AM";
if(h >= 12){
    h = h - 12;
    ampm = "PM"
}
//if hour value is 0,set this value to 12
h = h==0 ? h = 12 : h;
//adding 0 befforehr,min,sec
h= h < 10 ? "0" + h : h;
m= m < 10 ? "0" + m : m;
s= s < 10 ? "0" + s : s;

currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
if(alarmTime == `${h}:${m} ${ampm}` ){
   ringtone.play();
   ringtone.loop = true;
   
}
},1000);

function setAlarm(){
    if(isAlarmSet){ //if isAlaram is true
        alarmTime = ""; //clear the value of alaram time
        ringtone.pause(); //pause the ringtone
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;//return isAlaram value to false
    }
    //getting hours,minutes,amapm select tag
 let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

 if(time.includes("Hour") ||time.includes("Minutes") || time.includes("AM/PM")){
    return alert("please,select valid time to set Alarm");
 }
 isAlarmSet = true;
 alarmTime = time;
 console.log(alarmTime);
content.classList.add("disable");
setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click",setAlarm);

