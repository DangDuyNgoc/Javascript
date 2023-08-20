function hightlight([first, ...strings],...rest) {
    // return rest.reduce((previous, current) => 
    //     [...previous, `<strong>${current}</strong>`, strings.shift()], [first]).join('');
    return rest.reduce((acc, current)=>
        [...acc, `<strong>${current}</strong>`, strings.shift()], [first]).join('');
    // return rest.reduce(display, first );
}

// var i =0;
// function display(accumolator, current) {
//     i++;
//     console.table({
//         'luot chay': i,
//         'bien luu tru': accumolator,
//         'current value': current
//     });
// }

var brand = 'F8';
var course = 'Javascript';

const html = hightlight `Hoc lap trinh ${course} tai ${brand}!`
document.getElementById('block').innerHTML = html


const courseName = 'Javascript';
const description = `Course Description: ${courseName} \\ \${}` ;

// hiển thị "\" dùng "\\"
// hiển thị "${}" dùng "\"

console.log(html);
console.log(description);