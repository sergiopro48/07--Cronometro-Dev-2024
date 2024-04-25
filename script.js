let h1 = document.querySelector("h1")
let number = 0
let cron

function start(){
   if (cron) return
   
    cron = setInterval(() => {
        number++
        h1.innerHTML = number
    }, 100)
}

function stop(){
    clearInterval(cron)
}