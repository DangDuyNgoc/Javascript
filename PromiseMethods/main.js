/*
    1.Promise resolve
    2.Promise reject
    3.Promise all
*/

// var promise = Promise.resolve('Successfully!');
var promise = Promise.reject('Failed!');

promise
    .then((result)=>{
        console.log('result: ', result)
    })
    .catch((result)=>{
        console.log('Err: ', result);
    })

var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([1])
    }, 1000);
});

var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    }, 3000);
});

Promise.all([promise1, promise2])
    // cả 2 đồng thời resolve 
    // nếu 1 trong 2 reject thì lọt vào catch
    .then(function(result){
        var result1 = result[0];
        var result2 = result[1];

        console.log(result1.concat(result2));
    })
    .catch((e)=>{
        console.log(e);
    })
