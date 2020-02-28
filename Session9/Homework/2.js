let start = document.getElementById("start")
let stop = document.getElementById("stop")
let userInput=document.getElementById("userinput")
let timer=document.getElementById("count")
function sub(){
    if(timer.innerHTML==0){
        clearInterval()
        timer.innerHTML="Time's up"
    }else if(timer.innerHTML>0){
        --timer.innerHTML
    }
}
start.addEventListener('click',()=>{
    timer.innerHTML=userInput.value
    setInterval(sub,1000)
})
stop.addEventListener('click',()=>{
    timer.innerHTML="STOPPED"
})