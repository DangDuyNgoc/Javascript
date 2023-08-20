/* Sử dụng this trong một hàm sẽ là undefined khi ở strict mode 

    THIS: this trong js để cập nhật đến một đối tượng mà nó thuộc về
    Đặc tính:
        1.Trong một phương thức, this tham chiếu đến đối tượng truy cập phương thức
        (đối tượng trước dấu chấm)
        2. Đứng ngoài phương thức this tham chiếu đến đối tượng golbal
    Note: 
        1.This trong hàm tạo là đại diện cho đối tượng sẽ được tạo
        2.Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
*/



const animal = {
    name: 'bird',
    fly() {
        console.log(this);
    }
}
console.log(animal.fly());


const student = {
    name: 'Nguyen Van A',
    study() {
        console.log(this);
    }
}
console.log(student.study());

function Car(name, color) {
    this.name = name;
    this.color = color;

    // phương thức
    // this.run = function(){
    //     console.log(this);
    // }
}

// tạo phương thức bằng prototype
Car.prototype.run = function(){
    console.log(this);

    function test() {
        // this trong một hàm là windown
        console.log(this);
    }
    test();
}

const porsche = new Car('Porsche','Black');
const mercedes = new Car('Mercedes','Pink');
console.log(porsche.name);
console.log(porsche.name);
console.log(mercedes.run());
console.log(porsche.run());


    /*          Fn.bind()method             
    
        1. Phương thức bind() sẽ trả về một hàm mới
        2. Có thể nhận được các đối số như hàm ban đầu  
    */
this.firstName = 'John';
this.lastName = 'Tran'

const teacher = {
    firstName: 'Truong',
    lastName: 'Ngoc',
    getFullName(data1, data2) {
        console.log(data1, data2);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const studentBind = {
    firstName: 'Nguyen',
    lastName: 'A'
}

console.log(teacher.getFullName()); // Truong Ngoc
const getTeacher = teacher.getFullName;

console.log(getTeacher === teacher.getFullName); // true => cả 2 đều trỏ về 1 vùng nhớ
console.log(getTeacher()); 
/*John Tran => khi gọi một hàm không thông qua một đối tượng, 
 từ khoá this trỏ ra phạm vi windown */

const getTeacher2 = teacher.getFullName.bind(teacher, 'Test 1', 'Test 2'); // ràng buộc từ khoá this trong hàm được trả ra
const getTeacher3 = teacher.getFullName.bind(studentBind); 
/* đối số đầu tiên ràng buộc từ khoá this trong hàm được trả ra, đối số thứ 2 trở đi, tương ứng
    với giá trị được defined ở phương thức getName()
*/
console.log(getTeacher2 === teacher.getFullName); // false => cả 2 đều trỏ về 2 vùng nhớ khác nhau


console.log(getTeacher2()); //Truong Ngoc =>  this sẽ là đối tượng tượng truyền vào đối số đầu tiên bind
console.log(getTeacher2('Test 3, Test 4')); //  Ưu tiên Test 1, Test2 hơn
console.log(getTeacher3()); //Nguyen A 

const button = document.querySelector('button');
// button.onclick = function() {
//     teacher.getFullName();
// }

button.onclick = teacher.getFullName.bind(teacher);

const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const app = (()=> {
    const cars = ['Bmw'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

    return {
        add(car) {
            cars.push(car);
        }, 
        delete(index) {
            cars.splice(index, 1);
        }, 
        render() {
            const htlm = cars.map((car, index) =>
                `<li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>                
                </li>
                `
            ) .join('');

            root.innerHTML = htlm;
        },
        handleDelete(event) {
            // phương thức closest kiểm tra chính element đó, hoặc cha element đó có chứa class .delete kh
            const btn = event.target.closest('.delete');
            if(btn) {
                // element.dataset.keyname
                const index = btn.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init() {
            submit.onclick = () => { //arrow function không có context nên this sẽ trỏ ra bên ngoài.
                // nếu dùng function() {} this sẽ bị thay đổi thành object submit
                if(input.value === "") {
                    alert('Please enter data');
                } else {
                    this.add(input.value);
                    this.render();
                    input.value = '';
                    input.focus();
                }
            };
            // root.onclick = this.handleDelete => method handleDelete gán cho methos onclick, vì vậy
            // this trong method handleDelete là element root(thẻ ul);
            root.onclick = this.handleDelete.bind(this);

            this.render();
        }
    }
})();

app.init();