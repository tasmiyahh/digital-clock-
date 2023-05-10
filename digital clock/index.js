let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let amPmEle = document.querySelector(".amPm")

setInterval(function()  {
    const date = new Date()
    let hourschanging = date.getHours()
    let amPm = "AM"
 
    if(hours > 11){ //11 se bara ho tw pm 11 se km tw  kch krna nh qk time os wqt 12 k formate me he hotA H
         amPm = "PM"
    }if(hours > 12){
        hours = hours - 12 // 12 se bara ho tw hours me se 12 - tw 12 hour formatewala tym ajaye ga
                //13 - 12 = 1 dopair ka
    }
    hours.innerText = hourschanging
    minutes.innerText = date.getMinutes()

    let sec = date.getSeconds()
    if(sec > 0){
        seconds.innerHTML =  "0"+ date.getSeconds()  
    }
    if(sec > 10){
        seconds.innerHTML = date.getSeconds()
    }
  
    amPmEle.innerHTML = "AM"
}, 1000); //coz ek sec me 1000 mili hoty isliye 1000 likha is me 1000 k bad func chale ga


