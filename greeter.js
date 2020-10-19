function greeter(person) {
    return 'hello,' + person.firstName + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
// let user = 'json' 
var user = {
    firstName: 'chen',
    lastName: 'json'
};
var studentUser = new Student('json', 'm.', 'User');
document.body.textContent = greeter(user);
