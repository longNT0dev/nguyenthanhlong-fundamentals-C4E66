let del=document.getElementById("del")
let colorList=document.getElementById("color")
del.addEventListener('click',()=>{
      console.dir(colorList.value)
      for(let i=0;i<colorList.children.length;i++){
          if(colorList.value==colorList.children[i].innerHTML){
              colorList.removeChild(colorList.children[i])
          }
      }
})