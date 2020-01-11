let products =[
   {
    Name:'Xiaomi portable charger 20000mah',
    Brand :'Xiaomi',
    Price:'428',
    Color:'White',
    Category:'Charger',
   },
   {
    Name:'VSmart Active 1',
    Brand :'VSmart',
    Price:'5487',
    Color:'Black',
    Category:'Phone',
   },
   {
    Name:'IphoneX',
    Brand :'Apple',
    Price:'21490',
    Color:'Gray',
    Category:'phone',
   },
   {
    Name:'Samsung Galaxy A9',
    Brand :'Samsung',
    Price:'8490',
    Color:'Blue',
    Category:'Phone',
   },
]
//5.1

// for(let i=0;i<products.length;i++){
//      console.log(`${"Name:"} ${products[i].Name}`)
//      console.log(`${"Price:"} ${products[i].Price}`)
// }

//5.2
// for(let i=0;i<products.length;i++){
//      console.log(`${"#"}${i+1+"."}${"Name:"} ${products[i].Name}`)
//      console.log(`   ${"Price:"} ${products[i].Price}`)
// }
// console.log(products[Number(prompt("Enter product position"))-1])

//5.3
// switch(prompt("Enter your category?")){
//     case "Charger" :{
//         console.log(`${"Name:"} ${products[0].Name}`)
//         console.log(`${"Price:"} ${products[0].Price}`)
//         break
//     }
//     case "Phone" :{
//         for(let i=1;i<products.length;i++){
//             console.log(`${"Name:"} ${products[i].Name}`)
//             console.log(`${"Price:"} ${products[i].Price}`)
//         }
//         break
//     }
//     default :{
//         console.log("Khong ton tai")
//         break
//     }
// }

//***Co the so sanh voi product[i].Category =>console  tai i 

//5.4
let add=[
    'Phukien zero Dientuccc',
    'Tgdd Ddghn VhStore',
    'Tgdd',
    'Tgdd'
]
for(let i=0;i<products.length;i++){
    products[i].Providers=add[i]
}
for(let i=0;i<products.length;i++){
     console.log(`${"#"}${i+1+"."}${"Name:"} ${products[i].Name}`)
     console.log(`   ${"Price:"} ${products[i].Price}`)
     console.log(`   ${"Providers:"} ${products[i].Providers}`)
}

