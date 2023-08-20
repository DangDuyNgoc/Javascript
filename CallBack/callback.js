
Array.prototype.map2 = function(callback){
    var output = [];
    var arr = this.length;
    for(var i =0; i<arr; i++) {
        var results = callback(this[i], i);
        output.push(results);
    }
    return output;
}

var course =['Javascript', 'MySQL', 'PHP'];

var html = course.map2(function(element, index){
    // console.log(index, element)
    return `<h2>${element}</h2>\n`;
})
console.log(html.join(''));

//forEach2
Array.prototype.forEach2 = function(callback){
    // vòng lặp for in duyệt qua tất cả phần tử thực trong mảng và các phần tử trong prototype
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
}

var subject = new Array(10);
console.log(subject);
subject.push('Cau truc du lieu', 'Thiet ke Web', 'Dai so');

subject.forEach2(function(element, index, arr){
    console.log(index, element, arr);
})