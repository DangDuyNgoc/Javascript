function User(firstName, lastName, Age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = Age;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
    
}

var author = new User('Tran', 'Dang', '20');
var user = new User('Nguyen', 'Ngoc', '17');

author.title = 'Chia se tai day';
user.comment = 'I have some question';

console.log(author);
console.log(user);
console.log(author.getName());
console.log(user.getName());