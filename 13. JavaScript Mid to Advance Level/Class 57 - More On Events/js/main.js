//More On Events

document.querySelector('#name').addEventListener('focus', test); //focus in the input box
document.querySelector('#name').addEventListener('keyup', test2); //showing the keyup text by adding each input

function test(){
    this.style.background = 'pink'; //after clicking input box background color
}

function test2(){
    //console.log(this.value); //showing console by adding the each press of the keyboard
    document.getElementById('demo').innerText = this.value; //showing the inputted value instead of P tag value
}