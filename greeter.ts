// main  入口文件
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return 'hello,' + person.firstName + person.lastName
}

class Student {
  fullName: string;
  constructor(public firstName: string,
    public middleName: string,
    public lastName: string, ) {
    this.fullName = firstName + " " + middleName + " " + lastName

  }
}
// let user = 'json' 
let user = {
  firstName: 'chen',
  lastName: 'json'
}

let studentUser = new Student('json','m.','User')
document.body.textContent = greeter(user); 