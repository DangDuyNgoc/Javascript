/*
    CLosure là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được biến
    ở bên ngoài phạm vi của nó

    Ứng dụng: 
        1.viết code ngắn gọn
        2. Ứng dụng tính private trong OOP

    Note: Biến được tham chiếu (refer) trong closure sẽ không được xoá khỏi bộ nhớ khi hàm cha 
    thực hiện xong
*/

function makeCounter() {
    let counter = 0;

    function increaseCounter() {
        return ++counter;
    }

    return increaseCounter;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


function createStorage(key) {
    // biến store đc private 
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) { 
            return store[key];
        }, 
        set(key, value) {
            store[key] = value;
            save();
        }, 
        remove(key) {
            delete store[key];
            save();
        }
    }

    return storage;
}

const setData = createStorage('LocalStorage_Data');
// setData là biến global nên biến store sẽ không được xoá trừ khi thoát khỏi trình duyệt

console.log(setData.get('fullname'));
console.log(setData.get('age'));
setData.set('fullname', 'Tran Duc');
setData.set('age', 20);
setData.remove('age');


function createCar() {
    const cars =[];

    return {
        add(car) {
            cars.push(car);
        }, 
        show() {
            console.log(cars);
        },
        delete(index) {
            cars.splice(cars.indexOf(index), 1);
        }
    }
}

const app = createCar();

app.add('BMW');
app.add('Honda');
app.add('Maybatch');
app.show();
app.delete(1);
app.show();