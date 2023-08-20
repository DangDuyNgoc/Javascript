var promise = new Promise(function(resolve) {
    resolve();
});

promise
    .then(function(){
        // return 1;
        return new Promise(function(resolve){ 
           setTimeout(function(){
                resolve([123]);
           }, 3000);
        });
    })
    /*
        then đầu tiên return về khác Promise(array, object, string...) thì then thứ 2 sẽ 
        được chạy đầu tiên, còn then đầu return về promise thì then thứ 2 phải chờ then đầu chạy xong
    */
    .then(function(data){
        console.log(data);
        return 2;
    })
    .then(function(data){
        console.log(data);
        return 3;
    })
    .then(function(data){
        console.log(data)
    })
    .catch((err) => {
        console.log('Error');
    })
    .finally(function(){
        console.log('Done!')
    })

function sleep(ms) {
    return new Promise((resolve) =>{
        setTimeout(resolve,ms)
    });
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        // return sleep(1000);
        return new Promise((resolve, reject) => {
            reject("Error");
        })
    }) 
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .catch(function(e){
        console.log(e);
    })
