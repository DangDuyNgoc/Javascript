/*
    1. định nghĩa key: value cho object
    2. định nghĩa method cho value
    3. định nghĩa key cho object dưới dạng biến
*/

var Name = 'Javascript';
var price = 1000;

var course = {
    // name: name,
    // price: price             --- viết bình thường
    // getName: function(){
    //     return Name;
    // },

    //1. định nghĩa key
    Name,
    price, 

    //2. định nghĩa method
    getName() {
        return Name;
    }
};

console.log(course.getName());

//3. định nghĩa key cho object

var fieldName = 'name';
var fieldPrice = 'price';

const course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 2000
}

console.log(course2)