//Set

//No duplicate can keep in set

//How to create set 
//Set function give the object value for the output

let mySet = new Set([1, 2, 3]);

/*
mySet.add('Hello');
mySet.add(2); //here, 2 will not add in the set array because Set don't accept duplicate value.
//mySet.delete('Hello');//delete set value
//mySet.clear();//clear set


console.log(mySet.has(10))//check whether set has value 10 or not and given boolean value
console.log(mySet.size);//check how much elements are exist in set

console.log(mySet);
*/



//for loop works in set
/*
for(x of mySet){
    console.log(x);
}
*/



//Entries
//Entries value and key should be same

let iter = mySet.entries();
console.log(iter.next());//show first value of the array
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());// for this value will be undefined becuase here no values are available



//For loop in Entries

/*
for(x of mySet.entries()){//for individual output such as specificly for key or value just use mySet.key() for showing keys only and for 
    console.log(x);
}
*/

/*
for(let [x] of mySet.entries()){//x vaiable has third bracket sign for creating array
    console.log(x)
}
*/


//Spread operator in set 

// let iter = [...mySet.keys()];
// console.log(iter);