/* 
    1. Var / let, const: scope, hosting
    2. const / var, let: assignment(gán lại giá trị)

    3. Khái niệm Hoisting
    Với từ khoá var sẽ được hoisted lên đầu, và khởi tạo giá trị mặc định là undefined
    Với từ khoá let, const vẫn được hoisted lên đầu, nhưng sẽ không được gán giá trị 
    và đưa vào 'Temporal Dead Zone', vùng tạm thời không truy cập được trước khi khởi tạo
    
*/

if(true) {
    var courses = 'Javascript basics';
    /* sự khác nhau phạm vi truy cập: var có thể truy cập ở bên ngoài code block nhưng
        không thể truy cập ở phạm vi bên ngoài funcion, còn let và const
    chỉ có thể truy cập bên trong khối code
    */
}

{
    var name2 = 'String';
}

console.log(name2);

console.log(courses);

{
    let courses = 'Javascript basics!'; // tương tự với const
    {
        {
            const courses = 123;
            console.log(courses);
        }
    }
}

// hosting
a = 1;
var a;
console.log(a); // lỗi với let và const

// assignment
let b =1;
b= 123; // const thì không gán lại được

const d = {
    name: 'javascript'
}
a.name = 'PHP'
console.log(d.name); // gán lại biến name = php, vì name là thuộc tính của d.

console.log(b) // b= 123

// khi định nghĩa biến và cần gán lại biến: let
// khi không cần gán lại biến: const