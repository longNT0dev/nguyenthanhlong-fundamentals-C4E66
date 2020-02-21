const content={
    data:null
}
const getData= async ()=>{
    let api = await fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    let data= await api.json()
    content.data=data.data // content.data =[]
}
const viewData = async ()=>{
    await getData()
   
    console.log(content.data)
    let list=document.getElementById("list")
    content.data.forEach((value,index) => {
        let html=`
        <div id="users-${index}" class="block">
            <div class="unview">${value.employee_salary}</div>
            <li id="user-${index}">Name: ${value.employee_name}</li>
            <li>Salary: ${value.employee_salary}</li>
            <li>Age: ${value.employee_age}</li>
        </div>
        `
         list.innerHTML+=html
    });
}
const view=async ()=>{
    await viewData()
    for(let index = 0 ; index < content.data.length ; index++){
        let a=document.getElementById(`users-${index}`)
        let userInfor=document.getElementById(`user-${index}`)
        userInfor.addEventListener("mouseover",()=>{
        a.children[0].classList.toggle("view")
    })
}
}
view()
