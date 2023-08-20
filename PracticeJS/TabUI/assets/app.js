const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab-items');
var panes = $$('.tab-pane');
var line = $('.line');
console.log(panes);
var tabActive = $('.tab-items.active');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) => {
    var pane = panes[index];
    tab.addEventListener('click',() =>{
        $('.tab-items.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';
        tab.classList.add('active');
        pane.classList.add('active');
    });
})


// c2
// const tabs = $$('.tab-items');
// const panes = $$('.tab-pane');

// const tabActive = $('.tab-items.active');
// const line = $('.line');

// line.style.left = tabActive.offsetLeft + 'px';
// line.style.width = tabActive.offsetWidth + 'px';


// tabs.forEach((tab, element) => {
//     const pane = panes[element];

//     tab.onclick = function(){
//         $('.tab-items.active').classList.remove('active');
//         $('.tab-pane.active').classList.remove('active');

//         line.style.left = this.offsetLeft + 'px'; // this = tab
//         line.style.width = this.offsetWidth + 'px';

//         this.classList.add('active');
//         pane.classList.add('active');
//     }
// });