let sum=0
let str =prompt("enter a sequence of number seperated by a comma")
let strnums= str.split(",")
for(let i=0;i<strnums.length;i++){
   sum += parseInt(strnums[i])
}
//sum

alert("the sum of them is "+sum)

//Smallest

let min=parseInt(strnums[0])
for(let i=1;i<strnums.length;i++){
   if(parseInt(strnums[i])<min){
      min=parseInt(strnums[i])
   }
}
console.log(min)