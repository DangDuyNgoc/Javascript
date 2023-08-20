var boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'violet';

// cách 2
Object.assign(boxElement.style, {
    width: '100px',
    height: '100px',
    backgroundColor: '#c3c3c3',
})

console.log(boxElement.style.backgroundColor);

console.log(boxElement.classList.length);
console.log(boxElement.classList[0]);
console.log(boxElement.classList.value);

console.log(boxElement.classList);
boxElement.classList.add('red');

boxElement.onclick = function(e) {
    console.log(e);
}

console.log(boxElement.classList.contains('red')); //kiểm tra Element có class hay không?

boxElement.classList.remove('red');

setInterval(()=>{
    boxElement.classList.toggle('red'); // toggle-> có class thì xoá, không có class thì thêm vào
}, 1000)