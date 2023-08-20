// thêm một key từ một biến, đưa lên trên object
var myId = 'id';

var myInfor = {
    // dấu gạch ngang qui phạm quy tắc đặt tên, cần biến key thành string
    'full-name': 'Tran Van Duc',

    name: 'Tran',
    age: 20,
    address: 'QN',
    [myId]: '04',

    // lưu trưc value là một funcion
    getName: function() {
        return this.name;
    }
};

//xoá key
delete myInfor.id;
delete myInfor["full-name"];


// thêm key vào object
myInfor.email = 'ưeruwfaj';
myInfor['my-email'] = 'sdfjosicvsv';

console.log(myInfor)

// lấy value 
console.log(myInfor.address);

// khi nào sử dụng cách này?
var myKey = 'age';
console.log(myInfor[myKey]);

console.log(myInfor.date); // trả vể undefined

console.log(myInfor.getName());

// function -> phương thức (method)
// string, number.... -> thuộc tính (property)