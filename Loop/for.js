var myArray = [
    'javascript',
    'PHP',
    'C++',
    'MySQL'
];
var length = myArray.length;

for(var i = 0; i<length; i++) {
    console.log(myArray[i]);
}

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
    
function getTotal(total) {
    var length = total.length;
    var sum =0;
    for (var i=0; i<length;i++) {
        sum = sum + total[i].price;
    }
    return sum;
}

// Expected results:
getTotal(orders) // Output: 8700000
