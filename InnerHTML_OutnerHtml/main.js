
// InnerText And TextContent
var h1Element = document.querySelector('h1');
console.log(h1Element);
// h1Element.textContent = 'Just that'; tương tự như innerText
console.log(h1Element.innerText); // log ra như trên trình duyệt hiển thị bỏ qua tất cả thẻ html
console.log(h1Element.textContent); // log ra tất cả có trong DOM bỏ qua tất cả thẻ html




var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1 title = "heading">New Heading </h1>';

// boxElement.innerHTML = '<span>Text</span>'; // ghi đè thẻ h1 bên index

boxElement.outerHTML = '<span>Text</span>'; // ghi đè class box 
console.log(boxElement.outerHTML);  // console ther div và thẻ h1, nó được lưu trong bộ nhớ mất trong DOM