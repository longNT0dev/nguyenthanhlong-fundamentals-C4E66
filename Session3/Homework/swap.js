let a=5
let b=6
console.log(a,b)
//Cách 1
// let tg
// tg=a
// a=b
// b=tg

//Cách 2
// b=[a,a=b][0] //gia tri trong ngoac vuong gan gia tri b= gia tri phan tu trong ngoac cua mang

//result
console.log(`${a} ${b}`)
// example 2 
let c=7
c=[a,b=c][1] 
console.log(a,b,c) // in ra a=5 ,b=7 ,c=7

