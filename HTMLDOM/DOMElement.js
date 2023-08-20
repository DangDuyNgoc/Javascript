var headingNode = document.getElementById('heading')
console.log(headingNode);

var headingNodes = document.getElementsByClassName('heading')
console.log(headingNode);

var tagNodes = document.getElementsByTagName('h1')
var tagNodes = document.getElementsByTagName('p')
console.log(tagNodes);

var cssNode = document.querySelector('.box .heading-2');
var child = document.querySelector('.box .heading-2:first-child');
var node = document.querySelector('heading-2');