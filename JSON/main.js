/* * JavaScript Object Notation
là một định dạng dữ liệu (chuỗi)
JSON: Number, Object, Null, Array, Bollean, String

Stringify --> từ Javascript sang JSON
Parse --> Từ JSON sang Javascript

Thể hiện dạng string trong JSON thêm dấu ""
*/

var json = '["JavaScript", "PHP", "C++"]';
var string = '"A long time ago"';

var jObject = '{"name":"Tran", "age":20}'; // số không cần đưa vào ""

var a = '1';

console.log(JSON.parse(a));
console.log(typeof JSON.parse(string));
console.log("------------------------------");

console.log(json);
console.log(JSON.parse(json));

console.log("------------------------------");

console.log(jObject);
console.log(JSON.parse(jObject));

console.log("-------------------------------");
console.log(JSON.stringify({
    name: "T",
    age: "18"
}))