let age = Number(prompt("Dien tuoi vao day"))
let result = null
if (age < 5) {
    result = "Baby"
} else if (age < 16) {
    result="Thanh` nien"
} else if (age < 30) {
    result="thanh nien"
} else {
    result="Trung nien"
}
console.log(result)