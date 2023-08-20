Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            var results = callback(this[index], index, this)
            if(results) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

var course = [
    {
        name: 'Javascript',
        coin : 600
    },
    {
        name: 'PHP',
        coin: 400
    },
    {
        name: 'Ruby',
        coin: 700
    }
];

var Myfilter = course.filter2(function(element, index, arr){
    return element.coin > 400;
})
console.log(Myfilter);