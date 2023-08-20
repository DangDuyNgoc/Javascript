/* 
1. tạo giá trị Number
    - các cách tạo
    - kiểm tra data type
2. Làm việc với Number
    - To String
    - To Fixed
    keyword: javascrip number method
*/
 var age = 16;
 var Pi = 3.14;
 var A = 3.45;
 var B = 3.5;
 var C = 3498.353452;

//  cách 2
var otherNumber = new Number(4);

 console.log(typeof age)

 var result = 40 / 'ABC';
// kiểm tra biến có phải NaN
 console.log(isNaN (result))

 // chuyển đổi kiểu number thành kiểu String
 var myString = age.toString();

 console.log(typeof myString)

 console.log(Pi.toFixed()) // in ra số 3
 console.log(A.toFixed()) // làm tròn sau dấu thập phân nếu nhỏ hơn 5
 console.log(B.toFixed()) // làm tròn sau dấu thập phân nếu lón hơn hoặc bằng 5
 console.log(C.toFixed(3)) // lấy số sau dấu thập ph
