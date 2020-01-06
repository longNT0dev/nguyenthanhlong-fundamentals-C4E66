
// console.log(menu)
//CRUD - create ,read ,update ,delete
/*
 menu.forEach((value,index) => {
      console.log(value)
      console.log(index)
 })
*/

// let hobby =['an','ngu','choi']
// hobby.forEach((value,index) => {
//     console.log((index+1) + "." + value)
// })




// // menu.forEach((value,index) => {
// //     console.log(`${index+1}.${value}`) //$ dung de truyen gia tri 
// // })

// // Cach them 1 phan tu vao cuoi array
// menu.push('Pho bo ')
// console.log(menu)
let menu =['Bun cha','Bun dau','Bun ca']
let inputUser=prompt("Nhap vao 1 trong 3 gia tri C / R / U").toUpperCase //Thay thanh chu hoa 
if(inputUser == 'C'){
    foodUser=prompt("Nhap vao mon an ban muon")
     menu.push(foodUser)
     menu.forEach(value =>{
         console.log(value)
     })
}else if(inputUser=='R'){
    menu.forEach((value,index) =>{
        console.log(`${index+1}.${value}`)
    })
}else{
let indexUpdate =Number(prompt())
let changeFoodUser=prompt("Nhap vao mon an ban muon thay doi")
    menu[indexUpdate-1] = changeFoodUser
    menu.forEach((value,index) =>{
        console.log(`${index+1}.${value}`)
    })
}