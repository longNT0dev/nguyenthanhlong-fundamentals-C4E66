const list=document.querySelector("#content-list")
const  form =document.querySelector("#")
const submit=document.querySelector("summit")
// create elements and render
function render(doc){
    let components=document.createElement('div')
    let userName=document.createElement('span')
    let content=document.createElement('span')
    components.setAttribute('data-id',doc.id) 
    userName.textContent=doc.data().userName   
    content.textContent=doc.data().content
    components.appendChild(userName) 
    components.appendChild(content)
    list.appendChild(components)   
}
summit.addEventListener('click',(doc)=>{
    render(doc)
})
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    db.collection("user").add({
        userName:form.userName.value,
        content:form.content.value,
    })
    form.name.value= ""
    form.age.value= ""

})