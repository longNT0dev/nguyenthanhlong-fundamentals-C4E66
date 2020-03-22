const devlist=document.querySelector("#devlist")
const form=document.querySelector("#add-user")
// create elements and render
function renderdev(doc){
    let li=document.createElement('li')
    let name=document.createElement('span')
    let age=document.createElement('span')
    let cross=document.createElement('div')
// Them id cho cac the li
    li.setAttribute('data-id',doc.id) // gan data-id=doc.id
    console.log(li)
//Them content vao the span
    name.textContent=doc.data().Name   
    age.textContent=doc.data().Age
    cross.textContent='x'

 //Them 2 the span vao the li
    li.appendChild(name) 
    li.appendChild(age)
    li.appendChild(cross)
//Them the li vao the ul co id la devlist
    devlist.appendChild(li)   
    cross.addEventListener('click',(e)=>{
        // e.stopPropagation()   // stop event bubling up ??
        let id=e.target.parentElement.getAttribute('data-id') // Tao ra id cua phan tu li 
        db.collection('devheal').doc(id).delete()  // truy cap den element co id trong collection
    })
}
// //getting data
// // .where('field','compare','condition') => hien thi elements thoa man dieu kien

// db.collection('devheal').where('Age','==','10').orderBy("Name").get().then((snapshot)=>{ 
//       snapshot.docs.forEach(doc => {
//           renderdev(doc)   
//       });
// })
//saving data
form.addEventListener('submit',(e)=>{
    e.preventDefault() // no reload 
    db.collection("devheal").add({
        Name:form.name.value,
        Age:form.age.value,
    })
    form.name.value= ""
    form.age.value= ""

})
//real time listener
db.collection('devheal').orderBy("Name").onSnapshot(snapshot=>{
    let changes=snapshot.docChanges() // detect change intime , la 1 array 
    changes.forEach(change => {
        if(change.type=='added'){
            renderdev(change.doc)
        }else if(change.type='removed'){
            let li=devlist.querySelector('[data-id=' + change.doc.id + ']')
            devlist.removeChild(li)
        }
    });
})
/*
db.collection("devheal").doc('id').update({ => change only what we want

})
db.collection("devheal").doc('id').set({   => change the whole document

})
*/ 