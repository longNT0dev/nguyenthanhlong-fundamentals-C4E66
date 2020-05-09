
const list=document.getElementById("content-list")
const form=document.getElementById("userData")
const summit=document.getElementById("summit")

// realtime data
db.collection('user').orderBy("time","desc").onSnapshot(snapshot=>{ //desc =>> stt giảm dần 
    let changes=snapshot.docChanges() // detect change intime , la 1 array
    console.log(changes)
    changes.forEach(change => {
        if(change.type=='added'){
            render(change.doc)
        }else if(change.type=='modified'){
            console.log(change.doc.data().like)
            console.log(change.doc.data().dislike)
            updateLikeData(change.doc.id,change.doc.data().like)
            updateDislikeData(change.doc.id,change.doc.data().dislike)
        }
    });
})

function updateLikeData(id,dataLike){
    let likecount = document.getElementById(id + " " + "like")
    likecount.textContent = dataLike 
}
function updateDislikeData(id,dataDislike){
    let dislikecount = document.getElementById(id + " " + "dislike")
    dislikecount.textContent = dataDislike
}
//saving data
form.addEventListener('submit',(e)=>{
    e.preventDefault() 
    //realtime 
    let today = new Date()
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = date+' '+time
    db.collection("user").add({
        hastag:form.hastag.value,
        userName:form.userName.value,
        content:form.content.value,
        like:0,
        dislike:0,
        time:dateTime,
    })
    form.userName.value = ""
    form.hastag.value= ""
    form.content.value = ""
})

function render(doc){
    let posts=document.createElement('div')
    posts.setAttribute("class","content")
// image   
    let images=document.createElement('div')
    images.setAttribute("class","image-main")
    images.setAttribute('id','images')
    
    
    let image=document.createElement('img')
    image.setAttribute("class","image-class")

    images.appendChild(image)
// include 3 
    let content=document.createElement('div')
    content.setAttribute("class",'wrapper-info')
    content.setAttribute("id","doc.id")

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
    let likecount=document.createElement("p")
    likecount.setAttribute("id",doc.id + " " + "like")
    likecount.textContent=doc.data().like
//button like    
    let icon1=document.createElement("i")
    icon1.setAttribute("class","fas fa-thumbs-up")

    let button1=document.createElement("button")
    button1.setAttribute("class","btn-interact")
    let count1 = doc.data().like
    button1.addEventListener("click",()=>{
        ++count1
        console.log(count1)
        db.collection('user').doc(`${doc.id}`).update({
            like : count1
        }) 
    })
       
    button1.appendChild(icon1)
//dislike
    let dislikecount=document.createElement("p")
    dislikecount.setAttribute("id",doc.id + " " + "dislike")
    dislikecount.textContent=doc.data().dislike
//button dislike   
    let icon2=document.createElement("i")
    icon2.setAttribute("class","fas fa-thumbs-down")

    let button2=document.createElement("button")
    button2.setAttribute("class","btn-interact")
    let count2 = doc.data().dislike
    button2.addEventListener("click",()=>{
        ++count2
        db.collection('user').doc(`${doc.id}`).update({
            dislike : count2
        })
    })

    button2.appendChild(icon2)
   
    interact.appendChild(likecount)
    interact.appendChild(button1)
    interact.appendChild(dislikecount)
    interact.appendChild(button2)
//end    
    posts.appendChild(images)
    posts.appendChild(content)
    posts.appendChild(interact)
    list.appendChild(posts)
}
