// const get_even_list=(l) =>{
//     let list=l.filter(function(l){
//         return l%2==0
//     })
//     return list
// }
// get_even_list([4,5,-1,1,10])

const get_even_list=(l) =>{
    let arr=[]

    for(let i=0;i<l.length;i++){
        if(l[i]%2==0){
            arr.push(l[i])
        }
    }
    return arr
}
// get_even_list([1,-1,5,4,10])
even_list = get_even_list([1, 2, 5, 9, -10, 6])

if(JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")
}else{
    console.log("Ooops, bugs detected")
}
