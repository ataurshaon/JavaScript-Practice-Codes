//JavaScript DOM Event

// document.getElementById('sample-btn').addEventListener('click', message); //In addEventListener first parameter is Event Name and second parameter is function name

/*
function message(){  //this function accept only one parameter by default
    console.log('button click');
}
*/

/*
function message(e){
    let val = e;
    val = e.target; //show the whole button tag
    val = e.target.id; //show the id in button tag
    val = e.timeStamp; //show the time of one clicking to another
    val = e.type; //which type of event
    val = e.clientY; //value increase from up to down that means according to Y axes
    val = e.clientX; //value increase from left to right accroding to X axes

    console.log(val);
}
*/


document.querySelector('.container').addEventListener('click', test);
document.querySelector('.container').style.background = 'red';

function test(e){
    let val = e;
    val = e.offsetY; // work as like as clientY increase value from top to bottom
    val = e.offsetX; //work as like as client X increase value from left to right
    this.style.background = `#${e.offsetX}`; //changing the color after clicking
    console.log(val);
}