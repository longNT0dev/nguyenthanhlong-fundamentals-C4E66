let object =['but chi','but muc','thuoc ke','tay','but mau','but bi']
let inputUser=prompt("Nhap vao C/R/U/D/E").toUpperCase()
if(inputUser=='C'){ //C
    object.push(prompt("Nhap vao do muon mua"))
    object.forEach(value =>{
        console.log(value)
    })
}else if(inputUser=='R'){ //R
let inputRUser=prompt("Nhap vao A/O").toUpperCase()
if(inputRUser=='A'){
    object.forEach(value =>{
        console.log(value)
    })
}else if(inputRUser=='O'){
let indexRUser=Number(prompt("Nhap vao vat muon in"))
if(indexRUser>=0 && indexRUser<=object.length-1){
    console.log(object[indexRUser-1])
}else{
    alert("Error")
}
}else{
    alert("Error")
}
}else if(inputUser=='D'){ //D
let inputDUser=prompt("Nhap vao V/I").toUpperCase()
if(inputDUser=='V'){
let valueDUser = prompt("Nhap vao mon hang muon xoa")
if(object.indexOf(valueDUser)==0){ // ??????
   object.splice(object.indexOf(valueDUser),1)
}else{
    alert("Error")
}
}else if(inputDUser=='I'){
let indexDUser=Number(prompt())
if(indexDUser>=0 &&indexDUser<=object.length-1){
    object.splice(indexDUser,1)
}else{
    alert("Error")
}
}else{
    alert("Error")
}     
}else if(inputUser=='U'){ //U
let inputUser =prompt("Nhp vao V/I")
if(inputUser=='V'){
let valueUUser=prompt("Nhap vao mon hang muon thay doi")
if(valueUUser==object[object.indexOf(valueUUser)]){
let newvalue=prompt("Nhap vao mon hang moi ")
   object[object.indexOf(valueUUser)]=newvalue
}else{
    alert("Error")
}
}else if(inputUser=='I'){
let indexUUser=Number(prompt())
if(indexUUser>=0 &&indexUUser<=object.length-1){
let newobject=prompt("Nhap mon hang muon thay doi")
   object[indexUUser]=newobject
}else{
 alert("Error")
}     
}

}else if(inputUser=='E'){
    alert("Out")
}else{
    alert("Error")
}
object.forEach(value =>{
    console.log(value)
})
