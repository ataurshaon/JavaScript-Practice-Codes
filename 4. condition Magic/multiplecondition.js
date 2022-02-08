var getJob =true;
var savingAmount = 500000;

// && operator - should be true for all condition otherwise it won't execute

// if(getJob == true && savingAmount > 200000){
//     console.log("Now search for your life partner");
// }else if(getJob == true){
//     console.log("Please wait for few days");
// }else{
//     console.log("Marriage is not in your fate");
// }


// || should be one condition true and it will execute
 
if(getJob == true || savingAmount > 200000 ){
    console.log("Now search for your life partner");
}else{
    console.log("Marrage is not in your fate");
}