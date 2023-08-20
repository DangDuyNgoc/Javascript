var btn = document.querySelector('button')

function envent1() {
    console.log('Event 1');
}

function envent2() {
    console.log('Event 2');
}

function ramdom() {
    console.log(Math.random());
}

btn.addEventListener('click', ramdom);

btn.addEventListener('click', envent1);
btn.addEventListener('click', envent2);

setTimeout( function() {
    btn.removeEventListener('click', ramdom)
}, 3000);

/* 
    DOM Event => lắng nghe sự kiện nào đó mà không muốn gỡ bỏ
    Event Listener => xử lý nhiều việc khi một event xảy ra, muốn huỷ bỏ việc lắng nghe
*/