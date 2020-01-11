// Old
// function myName(){
//     console.log("hello")
// }
// myName()
//
// function sum(){
//     let x=10
//     let y=5
// return x+y
// }
// // let x= sum() // sum() luu giu gia tri cua x+y=15 khi return
// function helloSomeone(name){
//     console.log("hello",name)
// }
// helloSomeone("Long")

//Cach 2 
let x=Math.floor(Math.random()*10)
let y=Math.floor(Math.random()*10)
let ops=["+","-"]
let op=ops[Math.floor(Math.random()*ops.length)]
let delta= Math.floor(-4*(Math.random())+2)
const sum=(x,op,y,delta) => {
    if(op =="+"){
        result=x+y+delta
    }else{
        result=x-y+delta
    }
    return `${x} ${op} ${y} = ${result}`    
}
console.log(sum(x,op,y,delta))