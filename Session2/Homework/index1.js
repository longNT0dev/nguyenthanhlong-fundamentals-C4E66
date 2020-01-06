let username='c4e'
let password='codethechange'
let i=0
let result=null
while(i<3){
let userNameInput=prompt("nhap vao username")
let userPassInput=prompt("nhap vao pass"
if(userNameInput==username && userPassInput==password){
     result='dang nhap thanh cong'
     i=3
}else{
    result='Ban nhap sai user hoac pass roi'
    i++
}
}
alert(result)