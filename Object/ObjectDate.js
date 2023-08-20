var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1; // trả về từ 0 đến 11
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();

Date.prototype.getFull = function() {
    return `${day}/${month}/${year}`;
}

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(second);
console.log(date.getFull());

//keyword: javascript date object mozilla