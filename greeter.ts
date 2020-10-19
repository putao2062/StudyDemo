// main  入口文件
interface Person {
  firstName: string;
  lastName:string;
}
function greeter(person:Person){
  return 'hello,' + person.firstName + person.lastName
}

// let user = 'json' 
let user = {
  firstName:'chen',
  lastName:'json'
}

document.body.textContent = greeter(user); 