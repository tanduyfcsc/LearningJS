const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    eyeColor: "blue",
    myCars: {car1:"Ford", car2:"BWM", car3:"Fiat"},
    fullName: function() {return this.firstName + " " + this.lastName},
};

let c1 = "myCars";
let c2 = "car3";

// delete person.age

document.getElementById("demo").innerHTML = person.firstName + " is " + typeof person["age"] + " years old" + " and " + person.fullName() + " car name: " + person[c1][c2];