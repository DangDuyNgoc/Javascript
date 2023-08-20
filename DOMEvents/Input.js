/*
    1. Input / select
    2. Key up / down
*/

//1
var output = document.querySelector('input[type = "text"]');

output.onchange = function (e) {
    console.log(e.target.value); 
    // in ra giá trị được nhập vào, khi bỏ focus ra bên ngoài input, 
    // giá trị được nhập vào khác giá trị ban đầu
}

output.oninput = function(e) {
    console.log(e.target.value); // nhập đến đâu in ra đến đó
}

var output2 = document.querySelector('input[type = "checkbox"]');

output2.onchange = function(e1) {
    console.log(e1);
    console.log(e1.target);
    console.log(e1.target.checked);
}

var selectElenment = document.querySelector('select');

selectElenment.onchange = function(e2) {
    console.log(e2.target.value);
}

//2
var inputElement = document.querySelector('input[type = "text"]');

inputElement.onkeydown = function(e3) {
    console.log(e3.target.value); // nhập ab thì in ra a, abc in ra ab
}

inputElement.onkeyup = function(e4) {
    console.log(e4.target.value); // thả phím in ra 
    console.log(e4.which);
}
