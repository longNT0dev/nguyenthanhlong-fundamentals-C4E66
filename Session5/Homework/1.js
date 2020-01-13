/*
_Giúp cho đoạn code ngắn gọn hơn , đặc biệt khi sử dụng 
hàm đó nhiều lần
_function name(){  }
 const name() => {  }
_Giá trị của hàm đc lưu trữ trong giá trị return .Sử 
dụng giá trị đó cho các hàm hay bài toán lớn khác
Ex:
const sum(x,op,y) =>{
    let x=1
    let y=2
  return x+y
}
_Không
_Ex:
function sum(x,y,z)  =>> x,y,z là các parameters
sum(2,3,4)=>2,3,4 là các arguments

//call function from another js file
_In HTML :
<script src="file1.js"></script>
<script src="file2.js"></script>
<script>
    alertOne( );
</script>
_In JS :
// File1.js
function alertNumber( n ) {
    alert( n );
};
// File2.js
function alertOne( ) {
    alertNumber( "one" );
};
=>Chúng ta cần gọi 2 file js trước function
=>





*/