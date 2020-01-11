// diction={
//     'any':'anh nguoi yeu',
//     'btw':'by the way',
//     'anw':'any way',
// }
// let userInput=prompt("Nhap vao tu ma` ban muon xem ")
// if(userInput=='any'){
//     console.log(diction[userInput])
// }else if(userInput=='btw'){
//     console.log(diction[userInput])

// }else if(userInput=='anw'){
//     console.log(diction[userInput])
// }else{
//     alert("khong co trong tu dien")
//     let addInput=prompt("Ban co muon them vao tu dien k Y/N")
//     if(addInput=='Y'){
//         diction.userInput=userInput
//     }else if(addInput=='N'){
//         alert("Cam on ban")
//     }else{
//         alert("Ban nhap sai roi")
//     }
// }


//C2
while(true){
Object.keys(diction).forEach(value,index) => {
    console.log(`${index+1}`.`${value}`)
});
let userWordInput=prompt("nhap tu ma ban muon tra nhan E de exit").toLowerCase()
if(userWordInput=='e'){
    break
}
if(userWordInput in diction){
    console.log(diction[userWordInput])
}else{
    let userYN=prompt("Ban co muon them tu nay khong").toUpperCase()
    if(userYN=="y"){
        let newValue=prompt("Nhap vao y nghia cua tu")
        diction[userWordInput]=newValue
    }else if(userInput=='n'){
        console.log("cam on ban")
    }else{
        alert("Ban nhap sai roi")
    }
}
}