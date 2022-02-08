//Map
//Map is using for creating key and value for object

let myMap = new Map(

    [
        ['First Key', 10],
        ['Second Key', 'Hello']
    ]

);
myMap.set('Third Key', 'Hello Bangladesh');//for adding new key and value

console.log(myMap.get('First Key'));//get the value for the key
console.log(myMap.has('Second Key'));//check the key has exist or not in the Map object list and output is boolean value
console.log(myMap.size);//checking how much objects are in the map


for(let x of myMap){//show all the keys and values of Map
    console.log(x);
}

for (let [x, y] of myMap){//More organize way to show the keys and values of Map
    console.log(x, y);
}


for(let x of myMap.keys()){//showing only keys
    console.log(x);
}


for(let x of myMap.values()){//show only values 
    console.log(x);
}


//forEach loop

myMap.forEach((x, y)=>{
    console.log(x, y);//here, for first parameter shows value and for second parameter shows keys
})


//Array in Mapping
/*
let arr = Array.from(myMap);

console.log(arr);
*/

//Get Keys from Array in Map
/*
let arr = Array.from(myMap.keys());

console.log(arr);
*/

//Get values from Array in Map

let arr = Array.from(myMap.values());

console.log(arr);