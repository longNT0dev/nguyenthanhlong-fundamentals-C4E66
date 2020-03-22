const add=document.getElementById("add")
const summit=document.getElementById("summit")
const list=document.getElementById("content-list")
const form=document.getElementById("userData")
const table=document.getElementById("table")
var timer=0
// realtime data
db.collection('user').orderBy("time","desc").onSnapshot(snapshot=>{ //desc =>> stt giảm dần 
    let changes=snapshot.docChanges() // detect change intime , la 1 array 
    changes.forEach(change => {
        if(change.type=='added'){
            render(change.doc)
        }else if(change.type='removed'){
            let olddiv=list.querySelector('[data-id=' + change.doc.id + ']')
            list.removeChild(olddiv)
        }
    });
})
add.addEventListener("click",()=>{
    table.showModal()
})
//saving data
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    db.collection("user").add({
        userName:form.userName.value,
        content:form.content.value,
        time:timer,
    })
    form.userName.value = ""
    form.content.value = ""
    timer++
})
function render(doc){
    let include=document.createElement('a')
    include.setAttribute('class','posts')
    include.setAttribute("href","table1.html")
    include.addEventListener("click",()=>{
        write.textContent=doc.data().content
    })
    
    
    let images=document.createElement('div')
    images.setAttribute('class','images')
    

    let image1=document.createElement('img')
    image1.setAttribute("class","img1")

    let image2=document.createElement('img')
    image2.setAttribute("class","img2")

    let image3=document.createElement('img')
    image3.setAttribute("class","img3")

    images.appendChild(image1)
    images.appendChild(image2)
    images.appendChild(image3)

    
    let content=document.createElement('div')
    content.setAttribute("id",doc.id)
    content.setAttribute("class",'content')
//content
    let text1=document.createElement('span')
    text1.textContent=doc.data().userName
    text1.setAttribute("class","text1")
//userName
    let text2=document.createElement('div')
    text2.textContent=doc.data().content
    text2.setAttribute("class","text2")
    
    content.appendChild(text1)
    content.appendChild(text2)


    include.appendChild(images)
    include.appendChild(content)
    list.appendChild(include)
}
summit.addEventListener("click",(doc)=>{
    render(doc)
})
// link bai viet 
