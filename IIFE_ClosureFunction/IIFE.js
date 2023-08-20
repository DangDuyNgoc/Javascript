/*
    IIFE - Immediately Invoked Function Expression or Self-Invoking Funtion

    Note: 
        1.Dùng ";" trước IIFE
        2.IIFE là hàm private
*/

(function (){
    console.log('Now');
})();

let fullName = 'IIFE';

// Lỗi IIFE not a function nếu không có ; ở trước
(function (message){
    console.log('Message:', message);
})('Hello world!');

let i = 0;

(function IIFE (){
    i++;
    console.log(i);
    if(i<10)
        IIFE()
})();