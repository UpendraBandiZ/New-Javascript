//PROBLEM
// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");


// One way to solve it is using call back


// function getData(uId,callback) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     callback(uId+"@gmail.com")
//     }, 4000);
//     }
// var email=getData("upendra",callbackFunction)
// function callbackFunction(email)
// {
//     console.log("start");
//     console.log("the fetched email id is "+email);
//     console.log("end")
// }


//another way is to use async await promise

function getData(uId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched the data!");
        resolve(uId+"@gmail.com");
       
      }, 4000);
    });
  }



async function display() {
  console.log("start");
  var email = await getData("upendra");
  console.log("fetched email id is  " + email);
  console.log("end");
}
display()