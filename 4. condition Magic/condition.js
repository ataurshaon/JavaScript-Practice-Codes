var personOne = "Rahim";
var personTwo = "Karim";
var areTheyBrother = true;

if("Rahim" == personOne){
    if("Karim" == personTwo){
        if(true == areTheyBrother){
            console.log("Rahim & Karim are Brother");
        }else{
            console.log("Rahim & Karim are not Brother");
        }
    }
}

if("Rahim" == personOne && "Karim" == personTwo && true == areTheyBrother){
    console.log("Rahim & Karim are brother")
}else{
    console.log("They are not brother");
}
