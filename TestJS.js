// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//     eyeColor: "blue",
//     // myCars: {car1:"Ford", car2:"BWM", car3:"Fiat"},
//     // fullName: function() {return this.firstName + " " + this.lastName},
// };

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

// const fruits = {Bananas: 300, Oranges: 200, Apples: 500};

// let text = "";

// for (let [fruit, amount] of Object.entries(fruits)){
//     text += fruit + " " + amount + "<br>";
// }

// document.getElementById("demo").innerHTML = JSON.stringify(person);

// function Person(first, last, age, eye){
//     this.first = first;
//     this.last = last;
//     this.age = age;
//     this.eye;
//     this.nationality = "English"
//     this.fullName = function(){
//         return this.first + " " + this.last;
//     }
// }

// const myFather = new Person("John", "Doe", 50, "Blue");
// myFather.nationality = "English";

// const myMother = new Person("Sally", "Rally", 40, "Green")

// Person.prototype.nationality = "English";

// Person.prototype.changeName = function(name){
//     this.last = name;
// }

// myMother.changeName("Doe");

// document.getElementById("demo").innerHTML = "My father is " + myFather.fullName() + "." + " My mother is " + " " + myMother.last + ".";

// document.getElementById("demo").innerHTML = 
// '<p>The typeof "" is ' + typeof "" + '</p>' + 
// '<p>The typeof 10 is ' + typeof 10 + '</p'; 

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
}