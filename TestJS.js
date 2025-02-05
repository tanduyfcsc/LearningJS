const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    eyeColor: "blue",
    fullName: function() {return this.firstName + " " + this.lastName},
};

document.getElementById("demo").innerHTML = person.firstName + " is " + person["age"] + " years old" + " and " + person.fullName();