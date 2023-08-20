/*
    1.PreventDeafault
    2.StopPropagation
*/

var aElement = document.links;

var length = aElement.length
for(var i =0; i<length;++i) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}

//2
document.querySelector('.div').onclick = function() {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click!');
}
