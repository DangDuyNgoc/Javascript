const sum = (a,b) => a + b;
// tham số nhận vào a,b
console.log(sum(2,4));

console.log('---------------------');

const sum1 = (a,b) => ({a:a, b:b}); 
// đằng sau dấu "=>" phải khác "{}", return về object nhóm lại với dấu ()
console.log(sum1(4,6));

const announce = log => console.log(log);
announce('Ahhhh');

const courses = {
    name: 'Javascript basics',
    getName:  function() { // không thể thay thế bằng arrow function, sẽ trả vể undefined
        return this.name;
    }
}
console.log(courses.getName());

const Course =  function (name, price)  { // không thay thế bằng arrow function được, vì Course là constructor
    this.name = name;
    this.price = price;
}
const jsCourse = new Course('Javascirpt', 1000);
console.log(jsCourse);

/* function: 
    1. Declaration function
        function DeclarationFunction(message) {
            console.log(message);
        }
        DeclarationFunction('Message...');


    2. Expression function
        var ExpressionFunction = function ExpressionFunction() {

        }

    3. Arrow function

    sự khác nhau giữa Declaration Function và Expression Function: Hoisting
    có thể gọi hàm DeclarationFunction trước khi được định nghĩa, 
    ExpressionFunction thì không
    
    Tham số(parameter) và đối số(argument):
    - Các tham số của hàm là các tên được liệt kê trong định nghĩa hàm
    - Các đối số của hàm là các giá trị thực truyền vào cho hàm, hay các giá trị mà hàm được nhận
*/