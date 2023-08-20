/*
    1. Value Type(Primitive data type) - kiểu tham trị
        -String
        -Number
        -Boolean
        -Null
        -Undefined
        -BigInt
        -Symbol
    2. Reference Type(Non-primitive data type) - kiểu tham chiếu
        -Array
        -Object
        -Function
*/ 

let a = 1;
// Tạo ra biến a, cấp một ô nhớ, lưu 1 ô nhớ 

let b = a;
// Tạo ra biến b, cấp một ô nhớ khác, sao chép giá trị của a vào ô nhớ của b

a=2;
// với a =2. Sửa giá trị trong ô nhớ của a thành 2
console.log(b);
a===b ? console.log(true) : console.log(false);
/*
    Tạo biến c, cấp một vùng nhớ, lưu name vào vùng nhớ đó, và trả về địa chỉ ô nhớ đã lưu và gán cho c
    Biến        Giá trị     Địa chỉ     Ô nhớ
    c           <#001>      #001        {name: 'Mercedes}
*/
const c = {
    name: 'Mercedes',
}

const d = c;
/*
    Tạo biến d, trỏ biến d đến cùng địa chỉ ô nhớ của biến c
    Biến        Giá trị     Địa chỉ     Ô nhớ
    c           <#001>      #001        {name: 'Mercedes}
    d           <#001>
*/
c.name = 'BMW';
/*
    Sửa giá trị key name trong ô nhớ thành BMW
    Biến        Giá trị     Địa chỉ     Ô nhớ
    c           <#001>      #001        {name: 'BMW'}
    d           <#001>
*/

console.log(d.name);
d.name === c.name ? console.log(true) : console.log(false);