Array.prototype.some2 = function(callback) {
    // var output = false;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                // output = true;
                // break;
                return true;
            }
        }
    }
    // return output;
    return false;
}

Array.prototype.some3 = function(cb) {
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            var out = cb(this[i], i, this);
            if(out) return true;
        }
    }
    return false;
}

var course = [
    {
        name: 'Javascript',
        coin : 600,
        done: true
    },
    {
        name: 'PHP',
        coin: 400,
        done: false
    },
    {
        name: 'Ruby',
        coin: 700,
        done: false
    }
];

var Finished = course.some3(function(element, index, arr) {
    // return element.done ===  false;
    return element.done;

})
console.log(Finished)