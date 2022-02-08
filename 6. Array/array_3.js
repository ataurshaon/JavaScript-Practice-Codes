// var list1 = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June"
// ];

// var list2=list1.slice();

// list2[2] = "No Day";

// console.log(list1, list2);


// modern javascript ES 6

var list1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];

var list2=[...list1] ;

list2[2] = "No Day";

console.log(list2);