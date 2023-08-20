function User(firstName, lastName, Age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
    
}

// thêm thuộc tính vào User
console.log(User.prototype.className = 'F8');

// thêm phương thức vào User
User.prototype.getFull = function() {
    return `${this.firstName} ${this.lastName} ${this.Age}`
}

var author = new User('Tran', 'Dang', 20);
var user = new User('Nguyen', 'Ngoc', '17');

console.log(author);
console.log('-------------------');
console.log(user);
console.log(user.getName());
console.log('-------------------');
console.log(author.getFull());