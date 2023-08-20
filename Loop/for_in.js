var myString = 'Javascript';
var language = 'HTML';

for (var key in myString) {
    console.log(key)
}
console.log("=====================");
for (var key2 in language ) {
    console.log(language[key2]);
}

function run(object) {

/*
    Cách 1:
    var arr = [];
    for(var i in object){
        arr.push(`Thuộc tính ${i} có giá trị ${object[i]}`)
    }
    return arr;
*/

     var result = [];
    var count = 0;
    for(var key in object){
        result[count] = "Thuộc tính " + key + " có giá trị " + object[key];
        ++count;
    }
    return result;
    }


// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
