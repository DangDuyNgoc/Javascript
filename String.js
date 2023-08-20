// LÀM VIỆC VỚI CHUỖI

var myString2 = 'Hoc JS di JS JS lam';
var myString = '   Hoc JS de di lam    ';

//1.length
//console.log(myString.length)

//2. Find Index
console.log(myString.indexOf('JS')) //--> output: 4(đếm kí tự đứng thứ mấy, kí tự đầu tiên là 0)
console.log(myString.indexOf('ABC')) // nếu không có kí tự nào trong chuỗi thì trả về -1
console.log(myString.indexOf('JS', 6)) // đếm kí tự JS bắt đầu tại vị trí thứ 6
console.log(myString.lastIndexOf('JS')) // đếm kí tự cuối cùng trong chuỗi
console.log(myString.search('JS')) // tìm kiếm kí tự JS có trong chuối, không truyền vào vị trí bắt đầu tìm kiếm

//3. Cut string
console.log(myString.slice(4, 6)) // truyền vào 2 tham số, vị trí bắt đầu, vị trí kết thúc
console.log(myString.slice(4))
console.log(myString.slice(0))
console.log(myString.slice(-3)) // cắt từ phải qua, bắt đầu từ 0 đếm ngược về âm

//4.Replace
console.log(myString.replace('JS', 'Javascrip')) // truyền vào 2 tham số: tìm chuỗi muốn thay thế, chuỗi sẽ thay thế
console.log(myString2.replace('JS', 'Javascrip')) // chuỗi có nhiều kí tự

//5. Convert to upper case
console.log(myString.toLocaleUpperCase())

//6. Convert to lower case
console.log(myString.toLocaleLowerCase())

//7. Trim 
console.log(myString.trim().length) // loại bỏ kí tự trắng ở 2 đầu của chuỗi

//8. Split
var language = 'Javascrip, PHP, C++, HTML';
var language2 = 'Javascrip';

console.log(language.split(', ')) // chuyển chuổi sang mảng, truyền vào điểm chung giữa các mảng
console.log(language2.split(''))

//9. Get a character by index
console.log(language2.charAt(0))// lấy kí tự trong chuỗi bằng vị trí
console.log(language2[2]) // cách 2
console.log(typeof language2.charAt(10)) // nếu không có trả về kiểu String
console.log(typeof language2[10]) // nếu không có trả về kiểu undefined