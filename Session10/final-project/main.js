const list=document.getElementById("content-list")
const form=document.getElementById("userData")
const summit=document.getElementById("summit")
var timer=0
// realtime data
db.collection('user').orderBy("time","desc").onSnapshot(snapshot=>{ //desc =>> stt giảm dần 
    let changes=snapshot.docChanges() // detect change intime , la 1 array 
    changes.forEach(change => {
        if(change.type=='added'){
            render(change.doc)
        // }else if(change.type='updated'){
        //     let olddiv=list.querySelector('[data-id=' + change.doc.id + ']')
        //     list.removeChild(olddiv)
        }
    });
})
//saving data
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    db.collection("user").add({
        hastag:form.hastag.value,
        userName:form.userName.value,
        content:form.content.value,
        like:0,
        time:timer,
    })
    form.userName.value = ""
    form.hastag.value= ""
    form.content.value = ""
    timer++
})
function render(doc){
    let posts=document.createElement('div')
    posts.setAttribute("class","content")
    posts.setAttribute('id','posts')
// image   
    let images=document.createElement('div')
    images.setAttribute("class","image-main")
    images.setAttribute('id','images')
    
    
    let image=document.createElement('img')
    image.setAttribute("class","image-class")

    images.appendChild(image)
// content
    let content=document.createElement('div')
    // content.setAttribute("id",doc.id)
    content.setAttribute("class",'wrapper-info')
    
//hastag
    let hastag=document.createElement('p')
    hastag.textContent="#"+doc.data().hastag
    hastag.setAttribute("class","hastag")
//userName
    let author=document.createElement('p')
    author.textContent=doc.data().userName
    author.setAttribute("class","author")
//content
    let post=document.createElement('p')
    post.textContent=doc.data().content
    post.setAttribute("class","post")
    
    let more=document.createElement("a")
    more.setAttribute("class","read-more")
    more.setAttribute("href","#")
    more.textContent="Read more"
    post.appendChild(more)

    content.appendChild(hastag)
    content.appendChild(author)
    content.appendChild(post)
//interact
    

    let interact=document.createElement("div")
    interact.setAttribute("class","interact")
//like
let count1=0
    let likecount=document.createElement("p")
    likecount.setAttribute("id","likecount")
    likecount.innerHTML=count1
   
//button like    
    let icon1=document.createElement("i")
    icon1.setAttribute("class","fas fa-thumbs-up")

    let button1=document.createElement("button")
    button1.setAttribute("class","btn-interact")
    button1.addEventListener("click",()=>{
        db.collection("user").doc("b9pTMDpgsIe3Licwqttt").update({
            like:count1
        })
        // likecount.innerHTML= doc.data().like++
       
    })

    button1.appendChild(icon1)
   
//dislike
let count2=0
    let dislikecount=document.createElement("p")
    dislikecount.innerHTML=count2
//button dislike   
    let icon2=document.createElement("i")
    icon2.setAttribute("class","fas fa-thumbs-down")

    let button2=document.createElement("button")
    button2.setAttribute("class","btn-interact")
    button2.addEventListener("click",()=>{
        count2++
        dislikecount.innerHTML=count2
    })


    button2.appendChild(icon2)
   
//end
    interact.appendChild(likecount)
    interact.appendChild(button1)
    interact.appendChild(dislikecount)
    interact.appendChild(button2)
    
    posts.appendChild(images)
    posts.appendChild(content)
    posts.appendChild(interact)
    list.appendChild(posts)
}
summit.addEventListener("click",(doc)=>{
    render(doc)
})