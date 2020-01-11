// //initial
// let person = {
//     'name':'ThanhLong', // proverty:value 
//     'age':19,
//     'school':'HUST' ,
//     'status':'false' ,
// }
// //Read
// console.log(person)
// console.log(person.name)
// let userKey= 'name'
// console.log(person[userKey])
// //Create==Update
// person.dob = 2000
// console.log(person.dob)
//delete person.school
let person = {
         'name':'ThanhLong',  
         'age':19,
         'school':'HUST' ,
}
person.facebook='nguyenthanhlong'
let userInput=prompt("nhap vao key muon thay doi ")
let changeUser =prompt("Nhap vao tu thay doi")
person[userInput]=changeUser
console.log(person)
