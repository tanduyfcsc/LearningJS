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

// function displayDate(){
//     document.getElementById("demo").innerHTML = Date();
// }

// let text = 'Toi \'la \f \"Duy dep trai\"';
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// document.getElementById("demo").innerHTML = part;

// let text1 = "        Hello     ";
// let change = text1.trim();
// let text2 = "World!";
// let text3 = text1.concat("+", "-",text2);

// let text = "9";
// let change = text.repeat(4);

// document.getElementById("demo").innerHTML = change;
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML = text.toUpperCase();
// }

// let text = "Hello World!";

// const myArr = text.split("");

// text = "";

// for (let i = 0; i< myArr.length; i++) {
//     text += myArr[i] + "<br>"
// }

// document.getElementById("demo").innerHTML = text.toU;

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match(/ain/gi);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;

// let firstName = "John";
// let lastName = "Doe";

// let text = `"Welcome ${firstName}, ${lastName} = ${5+5}"`;

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;