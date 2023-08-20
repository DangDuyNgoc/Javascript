/*
    1. Attribute events
    2. Assign event using the element node
*/

//1
var random = document.querySelector('h1');
random.onclick = function() {
    console.log(Math.random());
}

//2
var H1List = document.querySelectorAll('h1');

var length = H1List.length;

for(var i = 0; i<length;++i) {
    H1List[i].onclick = function(e) {
        console.log(e.target);
    }
}