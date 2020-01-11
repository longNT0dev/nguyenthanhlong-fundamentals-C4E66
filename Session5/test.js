let x=Math.floor(Math.random()*10)
let y=Math.floor(Math.random()*10)
let ops=["+","-"]
let op=ops[Math.floor(Math.random()*ops.length)]
let result
let delta= Math.floor(-4*(Math.random())+2)
if(op =="+"){
    result=x+y+delta
}else{
    result=x-y+delta
}
console.log(`${x} ${op} ${y} = ${result}`)

// Cachs 2 them sai so 
/*
let errors=[-2,-1,0,1,2,0,0]
let error =errors[Math.floor(Math.random()*ops.length)]
*/
let test ="true"
if(delta!=0){
    test="false"
}
 let userInput=prompt()
if(userInput==test){
    console.log("Ban lam dung roi")
}else{
    console.log("Ban lam sai roi")
}


  