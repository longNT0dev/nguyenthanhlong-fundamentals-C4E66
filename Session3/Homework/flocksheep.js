 const Size =[5,7,300,90,24,50,75]
// console.log("Hello my name is Long and here is my sheep sizes:")
// console.log(...Size)
// //C1
// let max=Size[0]
// for(let i=1;i<Size.length;i++){
//    if(Size[i]>max){
//        max=Size[i]
//    }
// }
// //C2 : Math.max

// console.log("Now My biggest sheep has Size "+ max +" let's shave it")
// let a=Size[Size.indexOf(max,0)] =8
// console.log("After shearing,here is my flock")
// console.log(...Size)
//day by day 
for(let month=1 ;month<=3;month++){
   for(let i=0;i<Size.length;i++){
      Size[i]+=50
}
    console.log("Month "+month)
    console.log("One month has passed,my sheeps have grown,here are their sizes")
    console.log(...Size)
let max = Math.max(...Size)
    console.log("Now My biggest sheep has Size "+max+ " let's shave it")
    Size[Size.indexOf(max,0)]=8
    console.log("After shearing,here is my flock")
    console.log(...Size)
}
//Sell
let total=0
Size.forEach((value,index)=> {
    total+=value
});
let money =total*2
console.log("My flock has size in total ",total)
console.log("I would get "+ total+ " * "+"2$ = "+money )



