class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 1200);

console.log(phpCourse);
console.log(jsCourse);

// Default parameter values
function logger(log, isAlert = false) {
    if(isAlert) return alert(log);
    console.log(log);
}

logger('messages....', true)