let button=document.getElementById("press")
let userInput1=document.getElementById("input1")
let userInput2=document.getElementById("input2")
let update=document.getElementById("input3")
let tab=document.getElementById("list")
button.addEventListener('click',()=>{
     tab.children[0].children[userInput1.value-1].children[userInput2.value-1].innerHTML=`<td>${update.value}</td>`
})
