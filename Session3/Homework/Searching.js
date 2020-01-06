const arr=[3,4,-9,10,-88,2]
let check=0
let inputUser=Number(prompt("Enter a number to look for"))
for(let i=0;i<arr.length;i++){
   if(arr[i]==inputUser){
       alert(inputUser+" is FOUND in my array at "+ i)
       check=1
       break
   }  
}
if(check!=1){
   alert(inputUser+" is NOT FOUND in my array")
}