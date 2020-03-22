const timeSheetData={
    Project:["Learn font-end","Learn font-end","Learn font-end","Learn git"],
    Task:["Learn HTML","Learn CSS","Learn JS Variables and Data Types","Learn git basics"],
    TimeSpent:["6","8","6","2"],
};
let body=document.getElementById("ts_tbody")
    for(let k=0;k<body.children.length;k++){
       body.children[k].children[0].innerHTML=timeSheetData.Project[k]
    
       body.children[k].children[1].innerHTML=timeSheetData.Task[k]
   
       body.children[k].children[2].innerHTML=timeSheetData.TimeSpent[k]
    
}
console.dir(body.children)
let userInput1=document.getElementById("project")
let userInput2=document.getElementById("task")
let userInput3=document.getElementById("timespend")
let add=document.getElementById("add")
let Update=document.getElementById("update")
let clear=document.getElementById("clear")

add.addEventListener("click",()=>{
    let html=`
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button onclick="removeLine()">X</button>
            <button onclick="updateLine()">U</button>
        </td>
    </tr>
    `
    body.innerHTML+=html
    timeSheetData.Project.push(userInput1.value)
    timeSheetData.Task.push(userInput2.value)
    timeSheetData.TimeSpent.push(userInput3.value)
    for(let k=0;k<body.children.length;k++){
        body.children[k].children[0].innerHTML=timeSheetData.Project[k]
     
        body.children[k].children[1].innerHTML=timeSheetData.Task[k]
    
        body.children[k].children[2].innerHTML=timeSheetData.TimeSpent[k]
 }
      
})
function removeLine(index){
    body.children[index].innerHTML=null
}
function updateLine(index){
      userInput1.value=body.children[index].children[0].innerHTML
      userInput2.value=body.children[index].children[1].innerHTML
      userInput3.value=body.children[index].children[2].innerHTML
      Update.addEventListener('click',()=>{
         timeSheetData.Project[index]=userInput1.value
         timeSheetData.Task[index]=userInput2.value
         timeSheetData.TimeSpent[index]=userInput3.value
         for(let k=0;k<body.children.length;k++){
            body.children[k].children[0].innerHTML=timeSheetData.Project[k]
         
            body.children[k].children[1].innerHTML=timeSheetData.Task[k]
        
            body.children[k].children[2].innerHTML=timeSheetData.TimeSpent[k]
            userInput1.value=""
            userInput2.value=""
            userInput3.value=""
     }
    })
     
      
}
clear.addEventListener('click',()=>{
    userInput1.value=""
    userInput2.value=""
    userInput3.value=""
})

