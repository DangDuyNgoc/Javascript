//  include method chỉ có trong String và Array
console.log(Array.prototype.includes);
console.log(String.prototype.includes);

// include method in String
var string = "HTML CSS";
console.log(string.includes('CSS', 6));//nhận đối số thứ hai là position, kiểm tra từ vị trí đó
                                       // trong chuỗi, nếu có trả về true, không trả  false

// include method in Array
var array = ['Javascript', 'Ruby', 'PHP', 'Python'];
console.log(array.includes('Javascript', -3));
console.log(array.includes('Javascript', -4)); // 4 + -4 =0, tìm từ vị trí 0
console.log(array.includes('Javascript', -6)); // 4 + -6 =-2, nhỏ hơn 0, mặc định tìm từ vị trí 0

/*nhận đối số thứ hai là position, kiểm tra từ vị trí đó trong chuỗi, 
 nếu có trả về true, không trả  false
 Truyền vào số âm, lấy độ dài của mảng công với đối số được nhận vào
 */
