/*
    Call function
    1. Mượn hàm (function borrowing)
    2. Trong strict mode vẫn có this nếu được bind
    3. Tính kế thừa extends trong OOP
*/
function logger() {
    // giống mảng được đánh index nhưng không có các method của mảng

    //học để hiểu sâu
    console.log(arguments);
    const arr = Array.prototype.slice.call(arguments, 1);
    arr.forEach(element => {
        console.log(element);
    });

    // c1: convert sang mảng
    console.log([...arguments]);
    //c2:
    const myArr = Array.from(arguments);
    console.log(myArr);
}

logger(1, 2, 3, 4, 5, 6);


'use strict'


this.firstName = 'Ngoc', //phạm vi windown
this.lastName = 'Dang'

function showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

showFullName.call(this);
// showFullName(); // Cannot read properties of undefined (reading 'firstName') at getFullName


function animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function puppy(name, weight, legs) {
    animal.call(this, name, weight); // this trỏ đến myPuppy
    this.legs = legs;
}

const myPuppy = new puppy('Duc', 45, 2);
console.log(myPuppy);


const teacher =   {
    firstName: 'Minh',
    lastName: 'Thu'
}

const me = {
    firstName: 'Tran',
    lastName: 'Duc',
    getFullName() {
        // console.log(this); // this trỏ ra phạm vi windown
        console.log(`${this.firstName} ${this.lastName}`);
    }   
}

// me.getFullName.call(); // undefined
me.getFullName.call(me); // bind this rồi gọi hàm
me.getFullName.call(teacher); // mượn hàm

