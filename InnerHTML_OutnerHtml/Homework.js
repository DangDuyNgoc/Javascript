/*
    hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item 
    của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:
    ReactJS
    AngularJS
    VueJS
*/

//C1
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var output = document.querySelector('.courses-list');
    var list = [];
    var length= courses.length;
    for(var i =0; i<length;i++){
        list.push(`<li>${courses[i]}</li>`);
    }
    return output.innerHTML = list.join();
}

//C2
function render2(courses2) {
    var getItems = document.querySelector('.courses-list');
    var addItems = courses2.map(function(item){
        return `<li> ${item}</li>`;
    });

    var html = addItems.join();
    return getItems.innerHTML = html;
}