// Refactor the following function into a one-liner:
// const printName = (name) => {
//                      return “Hi” + name;
//            }
var printName=(name)=> "Hi! "+name;
console.log(printName("upendra"));

// Rewrite the following code using template literals
// const printBill = (name, bill) => {
//                      return “Hi “ + name + “, please pay: “ + bill;
//            }

 const printBill = (name, bill) => {
            return `Hi ${name} please pay: ${bill}`;
  }
console.log(printBill("upendra",100));


// Modify the following code such that the object properties are destructured and logged.
// const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);

const person = {
    name: "Noam Chomsky",
    age: 92
}

let { name:Name,age:Age } = person;
console.log(Name);
console.log(Age);
//let{name,age}=Person
//console.log(name+" "+age) also works
