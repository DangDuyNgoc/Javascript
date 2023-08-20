// ứng dụng với mảng
var language = [
    'Javascript',
    'HTML',
    'PHP'
];
for(var value of language) {
    console.log(value);
}

//ứng dụng với chuỗi
console.log("-----------------")
var myArray = 'Java';
for (var value2 of myArray) {
    console.log(value2);
}

console.log("-----------------");
var myInfor = {
    name: 'A',
    age: 20
};

console.log(Object.keys(myInfor));
console.log(Object.values(myInfor));
for(var value3 of (Object.keys(myInfor))) {
    console.log(value3);
    // console.log(myInfor[value3]);
}
console.log('--------------------');
for(var value4 of Object.values(myInfor)) {
    console.log(value4);
} 

for( var i =100; i >=0; i-= 5) {
    console.log(i);
}

var a =1;
console.log(a--);