const doomDay = new Date()
const futuretime = document.querySelector(".futuretime")
doomDay.setDate(15)
doomDay.setMonth(10)
doomDay.setFullYear(2025)
doomDay.setHours(0)
doomDay.setMinutes(0)



let date = new Date()

let diff = doomDay.getTime() - date.getTime() // gettime se mili sec aty h
//document.write(diff / (1000* 60 *60* 24 * 365.25))

futuretime.innerHTML = diff / (1000* 60 *60* 24 * 365.25)

// 1 sec = 1000 mili sec 
// 1 min = 60 sec
//1 h0ur = 60m
//1 day = 24 hours
//year = 365 // coz feb me hr 4 saal baad ek din zyada hota h isliye 365.25