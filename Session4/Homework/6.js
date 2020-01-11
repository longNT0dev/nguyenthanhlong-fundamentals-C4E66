let tasks=[
   {
    name:"HTML",
    Complete: false ,    
   },
   {
    name:"CSS",
    Complete: false ,    
   },
   {
    name:"Basics of Javascript",
    Complete: false ,    
   },
   {
    name:"Node Package Manager",
    Complete: false ,    
   },
   {
    name:"Git",
    Complete: false ,     
   },
]
for(let i=0;i<tasks.length;i++){
    console.log(`${i+1+"."} ${tasks[i].name}`)
    console.log(`   ${"Complete:"} ${tasks[i].Complete}`)
}
alert("Hi there,  this is your learning tasks to font-end developer career:")
let request=prompt("Enter your command(New,Delete,Update,Complete)")
switch(request){
    case "New" :{
      tasks.push(
          {
              name:prompt("Enter new task"),
              Complete:false,
          }
      )
      break
    }
    case "Update" :{
       tasks[Number(prompt("Enter position"))-1].name=prompt("Enter new titile")
      break  
    }
    case "Complete" :{
       tasks[Number(prompt("Enter position"))-1].Complete=true
      break
    }
    case "Delete" :{
       tasks.splice(Number(prompt("Enter position"))-1,1)
       break
    }
    default :{
       alert("Khong ton tai")
       break
    }
}
for(let i=0;i<tasks.length;i++){
    console.log(`${i+1+"."} ${tasks[i].name}`)
    console.log(`   ${"Complete:"} ${tasks[i].Complete}`)
}