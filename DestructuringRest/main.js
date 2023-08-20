var array = ['Javascript', 'PHP', 'Ruby'];

// var [a,b,c] = array;
var [a, , c] = array;
console.log(a, c); // javascript, ruby bỏ php 

var [a, ...rest] = array;

console.log(a);
console.log(rest);

var course = {
    name: 'Javascript',
    price: 100,
    children: {
        name: 'PHP'
    },
    decription: 'value'
};
// khi sử dụng destructuring với object cần xác định đúng tên của thuộc tính của object đó
// đặt lại tên biến name của object cha, name = oldName. console.log name, object con sẽ ghi đè name của object cha
// khi object không có description trả về Error(defalut value), có thì lấy value trong object đó
var {name:oldName, price, children:{name}, decription = 'Error'} = course;
console.log(oldName, price, decription);

function logger ({name, ...rest}){
    console.log(name);
    console.log(rest);
}

logger({
    name: 'Javascirpt',
    price: 1000,
    description: 'abc'
})

function array2 ([a,b, ...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

array2([2, 4, 5, 6,7])