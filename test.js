// const teacher = {
//   firstName: 'Minh',
//   lastName: 'Thu',
//   isOnline: false,
//   goOnline() {
//     this.isOnline = true;
//     console.log(`${this.firstName} ${this.lastName} is online`);
//   },
//   goOffline() {
//     this.isOnline = false;
//     console.log(`${this.firstName} ${this.lastName} is offline`);
//   },
// };

// const me =  {
//   firstName: 'Tran',
//   lastName: 'Duc',
//   isOnline: false,
//   showFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// me.showFullName.call(teacher);

// console.log('Teacher Online:', teacher.isOnline);
// teacher.goOnline();
// console.log('Teacher Online:', teacher.isOnline);
// console.log('-----------');
// console.log('Student:', me.isOnline);
// teacher.goOnline.apply(me);
// console.log('Student:', me.isOnline);
// console.log('-----------');


// function greet(greetings, message) {
//   //this là teacher
//   return `${greetings} ${message} ${this.firstName} ${this.lastName}`;
// }

// //apply lấy teacher bind this vào greet
// let result = greet.apply(teacher, ['Chao co', 'What subject are you teaching']);

// console.log(result);

// //so sanh call() method
// result = greet.call(teacher, 'Chao co', 'What do you want to say?');
// console.log(result);

// const js = {
//   language: 'loosely type', 
//   lable: 'difficulty'
// };

// const edu = {...js, level: 'PHP'};

// const newbie = edu;

// delete edu.language;

// console.log(Object.keys(newbie).length);

// // let x = {};
// // let y = {};
// // let z = x;

// String.prototype.lengthy = () => {
//   console.log('heelo');
// };

// let x = {name: "cuong"};

// delete x;

// x.name.length(); 

// function muFunc() {
//   var name = 'Tran';
//   var age = 20
//   Happy(name, age)
// }

// function Happy(name, age) {
//   console.log (`abc ${name} ${age}`)
// }

// muFunc();

// x =43;
// let y = 3;
// x.delete();
// console.log(x);

function isValid(s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }
  
  if (stack.length !== 0) {
    return false;
  }
  
  return true;
}
console.log(isValid('[(]'));

