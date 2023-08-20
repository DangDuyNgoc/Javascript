
// cách 1
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages)

// cách 2:
var lang = new Array(
    'ABC',
    'GOD'
) 
console.log(typeof lang)

// kiểm tra xem có phải array hay không?
console.log(Array.isArray(languages))
/*
2.truy xuất mảng
    - độ dai mảng
    - lấy phần tử theo index
*/

// độ dài mảng
console.log(languages.length)

// lấy phần tử theo index
console.log(languages[0]) // in ra Javascript, phần tử đâu tiên sẽ được đánh dâu từ vị trí số 0

                                /* LÀM VIỆC VỚI MẢNG
            Keyword: Javascript array methods

            1. To string
            2. Join
            3. Pop
            4. Push
            5. Shift
            6. Unshift
            7. Splicing
            8. Concat
            9. Slicing */

console.log(languages.toString()) // 1. chuyển array thành kiểu String

console.log(languages.join(' - ')) // 2. thay đổi kí tự ngăn cách các phần từ trong mảng

console.log(languages.pop()) // 3. xoá phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages)

console.log(languages.push('CSS', 'Ruby')) //4. thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng
console.log(languages)

console.log(languages.shift()) // 5.xoá một phần tử đầu của mảng và in ra phần tử đã xoá
console.log(languages)

console.log(languages.unshift('Javascript', 'HTML')) // 6. thêm một hoặc nhiều phần tử vào đầu mảng và in ra độ dài của mảng
console.log(languages)

languages.splice(0, 2, 'Java') // 7. (vị trí đặt con trỏ chuột, số phần từ cần xoá, phần từ được thêm vào)
console.log(languages)

console.log(languages.concat(lang)) // 8. nối mảng, languages se là hàm gốc

console.log(languages.slice(0, 3)) // 9. cắt mảng, (vị trí bắt đầu, vị trí kết thúc)

