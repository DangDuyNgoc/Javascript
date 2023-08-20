Array.prototype.every2 = function(callback) {
    for(var index in this) {
        if (this.hasOwnProperty(index)){
            var results = callback(this[index], index, this)
            if(!results){
                return false;
            }
        }
    }
    return true;
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

var Finished = course.every(function(element, index, arr){
    console.log(element);
    // return element.done;
})

console.log(Finished)