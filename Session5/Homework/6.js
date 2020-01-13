//1
// const remove_dollar_sign=(s) =>{
// let  newstr= s.replace(/[$]/g,"")
//    console.log(newstr)
// }
//remove_dollar_sign("$hel$lo")
//2 Modify
const remove_dollar_sign=(s) =>{
   let  newstr= s.replace(/[$]/g,"")
      return newstr
   }
string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}
