"use strict";
// fullname = "Tran Duc"
// function getName() {
//     // phạm vi hàm
//     // "use strict";
//     age = 18;
// }

// getName();

// console.log(fullname);
// console.log(age);

// writable
// const strictObject = Object.freeze({ 
//     // không thể gán lại biến fullname
//     fullname: "Nguyen Van A"
// });

// strictObject.fullname = "Nguyen Van B";

// console.log(strictObject.fullname);

var test = {
    fullname: "Nguyen Van B",
}

test.fullname = "Nguyen Van C"

console.log(test);

// defined Object
const student = {}
Object.defineProperty(student, "fullname", {
    value: "Naire Van B",
    writable: true, // khi khai báo với writable mặc định là false
})

student.fullname = "Naire Van C";

console.log(student)

let student2 = {
    fullname: "Naire Van C",
    age: 20
}

delete student2.fullname;

console.log(student2);