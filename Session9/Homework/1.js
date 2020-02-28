let plus=document.getElementById("add")
let subtract=document.getElementById("sub")
let show=document.getElementById("text")
let count =0
show.innerHTML=count
plus.addEventListener("click",()=>{
    ++count
    show.innerHTML=count
})
subtract.addEventListener("click",()=>{
    --count
    show.innerHTML=count
})