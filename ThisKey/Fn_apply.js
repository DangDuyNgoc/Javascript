/*
    Function Apply
    đối số thứ nhất this argument, đối số thứ hai là mảng
    1. Function Brorrowing
*/
const teacher = {
    firstName: 'Truong',
    lastName: 'Ngoc',
    isOnline: false,
    goOffline()  {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is offline`);
    },
    goOnLine() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is online`);
    }
}

const me = {
    firstName: 'Tran',
    lastName: 'Duc',
    isOnline: false,
}

console.log('Teacher:', teacher.isOnline);
teacher.goOnLine();
console.log('Teacher:', teacher.isOnline);

console.log('-----------');
console.log('Student:', me.isOnline);
teacher.goOnLine.apply(me);
console.log('Student:', me.isOnline);

/** 
2. Extend OPP
*/
function animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function parrot() {
    /* Argument có tính chất tương tự cái mảng, apply nhận đối số là một mảng */
    animal.apply(this, arguments);
    this.speak = function() {
        console.log('Nhà có khách');
    }
}

const myPet = new parrot('vet', 0.3,)
myPet.speak();
console.log(myPet);
