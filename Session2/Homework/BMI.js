let userHInput = Number(prompt("Nhập vào chiều cao của bạn (cm)"))
let userWInput = Number(prompt("Nhập vào cân nặng của bạn (kg)"))
let height = userHInput*0.01
let mass = userWInput
let BMI =mass/Math.pow(height,2)
let result =null
if(BMI < 16){
    result = "Severely underweight"
}else if(BMI < 18.5){
    result = "Underweight"
}else if(BMI < 25){
    result = "Normal"
}else if(BMI < 30){
    result = "Overweight"
}else{
    result = "Obese"
}
console.log(BMI)
console.log(result)