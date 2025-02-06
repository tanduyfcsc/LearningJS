const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    eyeColor: "blue",
    // myCars: {car1:"Ford", car2:"BWM", car3:"Fiat"},
    // fullName: function() {return this.firstName + " " + this.lastName},
};

// let c1 = "myCars";
// let c2 = "car3";

// delete person.age

// person.fullName = function() {
//     return (this.firstName + " " + this.lastName).toUpperCase();
// }

// let text = "";
// for (let x in person) {
//     text += person[x] + " ";
// }

// const myArr = Object.values(person);

// document.getElementById("demo").innerHTML = myArr;

const fruits = {Bananas: 300, Oranges: 200, Apples: 500};

let text = "";

for (let [fruit, amount] of Object.entries(fruits)){
    text += fruit + " " + amount + "<br>";
}

document.getElementById("demo").innerHTML = JSON.stringify(person);