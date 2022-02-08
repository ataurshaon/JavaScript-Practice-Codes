//Iterator


/*

let iterable = 'Hello';
iterable = [1,2,3,4,5];//Array iteration as like as 

//Using Symbol.iterator()

let itr = iterable[Symbol.iterator]();

//console.log(itr)
//Below console.log iterate the string one by one and at last show the done property true

console.log(itr.next().value);// To show only value use value at last 
console.log(itr.next());
console.log(itr.next());

console.log('Others Code...');// We can include anything before the finishing of the iteration

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
*/




//Iterate in Array

let names = ['Hasan', 'Shaon', 'Rahi', 'Ovi', 'Shakil'];

//Creating custom iterator

function customerIterator(arr){
    let i = 0;

    return {
        next: function(){
            return i < arr.length ? {value: arr[i++], done: false} : {done: false}
        } 
    }
}

let members = customerIterator(names);
console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);

console.log('Otthers Code...')

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);