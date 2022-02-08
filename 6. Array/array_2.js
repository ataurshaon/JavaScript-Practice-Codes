var male = ["Rahi", "Maruf", "Prova","Shuvo","Mamun"];
var female = ["Jannat", "Shanta", "Riya", "Mili", "Mou"];

var personToRemove = male[2];
female.push(personToRemove);
// delete(male[2]);
male.splice(2,1);
console.log(male,female);
console.log(male.length, female.length);