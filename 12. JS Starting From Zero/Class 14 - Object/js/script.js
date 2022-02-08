
//Multiple array into one another
var arr = [1, 2, ["a", "b"], 4, 5];
console.log(arr);
console.log(arr [2][1]);


var arr2 = [1, 3, ["a", ["Word A", "Word B"], "b"], 5, 7];
console.log(arr2);
console.log(arr2 [2][1][1]);

//Array & obejct value find out
var arr3 = [1 , 2, ["a", "b"], {prop1: "Item1", prop2: "Item2"}];
console.log(arr3);
console.log(arr3[3].prop1);

// Array & object value find out in object multiple array
var arr4 = ["Item1", "Item2", {prop1: "Item01", prop2: [2, 3, ["a", "b"]]}];
console.log(arr4);
console.log(arr4[2].prop2[2][1]);

// value find out from object array
var obj = {
    prop1: "prop 1",
    prop2: "prop 2",
    prop3: ["Item Number 1]", "Item Number 2"]
};

console.log(obj);

var result = obj.prop3[1];
console.log(result);