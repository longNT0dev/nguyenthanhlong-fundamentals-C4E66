let x=Number(prompt())
let y=Number(prompt())
let a={
    "+" :x+y,
    "-" :x-y,
    "*" :x*y,
    "/" :x/y,
} ;
let op=prompt()
console.log(a[op])
// C2
let x=Number(prompt())
let y=Number(prompt())
let op=prompt()
let result
switch(op){
    case "+" :
        result= x+y
        break
    case "-" :
         result=x-y
         break
    case "*" :
        result=x*y
        break
    case "/" :
        result =x/y
        break
}