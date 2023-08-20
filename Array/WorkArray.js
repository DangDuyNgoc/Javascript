/*
    Array methods:
        forEach() --> duyệt qua từng phần từ của mảng
        every() --> duyệt qua tất cả các phần tử, tất cả phải thoả mãn một điều kiện, chỉ cẩn một phần tử
                    sai --> return false
        some() --> duyệt qua tất cả các phần tử,chỉ cần một phần tử thoả điều kiên --> return true
        find() --> tìm phần tử theo ý muốn, chỉ trả về phần tử đầu tiên hàm tìm được
        filter() --> tìm tất cả phần tử giống trong mảng
        map() --> duyệt qua tất cả phần tử có trong mảng
        reduce()--> nhận vào hai đối số, đối số thứ nhất một function, đối số thứ hai là giá trị khởi tạo
                    giá trị khởi tạo (initial value) có thế có hoặc không. Nếu như không khởi tạo thì giá
                    trị mặc định sẽ là giá trị đầu tiên của phần tử
                    Tham số mà function nhận vào: 
                        + accumulator: chính là biến lưu trữ, đối số thứ hai initital Value sẽ được gán cho accumulator
                        + currentValue: giá trị phần tử hiện tại
                        + currentIndex: chỉ mục của phẩn tử hiện tại
                        + array: chính là array gọi đến phương thức reduce()
*/

var course = [
    {
        id: 1,
        name: 'Java',
        price: 250
    }, 

    {
        id: 2,
        name: 'HTML, CSS',
        price: 0
    },

    {
        id: 3,
        name: 'PHP',
        price: 0,
    }, 

    {
        id: 4,
        name: 'Ruby',
        price: 300
    },

    {
        id: 5,
        name: 'Ruby',
        price: 10
    },
];

course.forEach(function(element, index){
    console.log(element, index);
});

// every()
console.log('---------EVERY()---------')
var isFree = course.every(function(element, index){
    console.log(index);
    return element.price === 0;
});
console.log(isFree); 
console.log('------------------------');

//some()
console.log('---------SOME()---------');
var isFree = course.some(function(element, index){
    console.log(index);
    return element.price === 0;
});
console.log(isFree); 
console.log('--------------------------');

//find()
console.log('---------FIND()------------');
var courseName = course.find(function(courseName,index){
    return courseName.name === 'Ruby';
})
console.log(courseName);
console.log('--------------------------');

//filter()
console.log('---------FILTER()------------');
var f_filter = course.filter(function(ele, ind){
    return ele.name === 'Ruby';
})
console.log(f_filter);

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr) {
    return arr = sports.filter(function(element){
        return element.like > 5;
    })
}
console.log(getMostFavoriteSport(sports)) 
console.log('--------------------------');

//map()
console.log('---------MAP()------------');

function courseHandler(element, index) {
    // console.log(element);
    // return 123;
    return {
        id: element.id,
        name: `Khoa hoc: ${element.name}`,
        price: element.price,
        coinText: `Gia: ${element.price}`,
        index: index,
    };
}
var newCourse = course.map(courseHandler)
console.log(newCourse);
console.log('--------------------------');

//reduce()
console.log('---------REDUCE()------------');

var i =0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.price;
    console.table({
        'Lượt chạy: ': i,
        'Biến lưu trữ:': accumulator,
        'Gia Khoa Hoc:': currentValue,
        'Tích trữ được:': total
    });
    console.log(currentValue);
    console.log(currentIndex);
    console.log(originArray);
    return total;
}

var totalPrice = course.reduce(coinHandler, 0)
console.log('Total Price: ',totalPrice);

var sport = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(arr) {
    var total = arr.reduce(function(accumolator, currentValue){
        return accumolator + currentValue.gold;
    },0);
    return total;
}

// Expected results:
var html = `Tong so huy chuong vang: ${getTotalGold(sport)}`;
document.getElementById('block').innerHTML = html;
console.log('Tong so huy chuong vang: ',getTotalGold(sport))