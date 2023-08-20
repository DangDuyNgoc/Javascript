var arr = ['Javascript', 'Ruby', 'PHP'];
var arr2 = ['ReactJS', 'NodeJS'];
var arr3 = [...arr2, ...arr]; // dấu chấm bỏ đi dâu ngoặc vuông của arr2 và arr
console.log(arr3);

var object1 = {
    name: 'Javascript'
}

var object2 = {
    price: 1000
}

var object3 = {
    ...object1,
    ...object2
}

console.log(object3);

var array = ['Javascript', 'PHP', 'Ruby'];
//...rest =>Rest
function logger(...rest){
    for(var i=0; i<rest.length; i++) {
        console.log(rest[i]);
    }
}

//...array => Spread
logger(...array);
