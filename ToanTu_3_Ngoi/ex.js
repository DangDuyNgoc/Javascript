var course = {
    name: 'Java',
    coin: 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

var a = -6;
var b = 2;

var c = a >0 ? a:b+2; // gán c = a, so sánh nếu a >0 thì gán c = a, nếu a < 0 thì thực hiện b + 2
console.log(c);