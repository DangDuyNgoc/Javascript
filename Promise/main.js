var promise = new Promise (
    //Executor
    function(resolve, reject) {
        //Thanh cong: resolve()
        //That bai: reject()

        // thành công
    //     resolve([{
    //         id: 1,
    //         name: "PHP"
    //     }]);

        // thất bại
        reject("Error");

    }
);

/*
3 trạng thái của promise: 
    1. Pendding --> chờ sử lý, không gọi resolve hay reject
    2. Fulfilled --> trạng thái thành công gọi đến resolve()
    3. Reject --> thất bại gọi đến reject()
*/

promise
    .then(function(e){
        console.log(e);
    })

    .catch(function(e){
        console.log(e);
    })

    .finally(function(){    // finally có thể có hoặc không
        console.log("Done!")
    })

/* Khái niệm về Promise:
    Promise sinh ra để xử lý những thao tác bất đồng bộ, trước khi có promise 
    chúng ta sử dụng callback, callback sẽ xảy ra vấn đề, đó là callback hell
    code bị rối, khó hiểu, đi sâu. Chúng ta có thể sử dụng Promise để khắc phục callback hell
    Để tạo ra Promise, sử dụng từ khoá new Promise, và trong contructor của nó
    truyền vào một Executor function(), trong này nhận được 2 tham số dạng hàm, 1 là resolve()
    2 là reject(). Resolve() được gọi khi thao tác sử lý logic thành công, 
    Reject() được gọi khi thao tác sử lý thất bại
    Promise được sử dụng qua những phương thức then, catch, đều nhận callback function()
    then sẽ được thực thi khi promise resolve(), catch khi promise reject()

*/
