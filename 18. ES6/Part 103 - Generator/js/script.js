//Generator
//Generator is working as like as Iterator
//Generator has * sign after function
//Please note that for below if the second generator is not console then the console. log value will not show in output that means at first need to console.log the generator then we can see other codes

function* genFunction(){
    console.log('Generator');
    yield 1;
    console.log('Generator');
    console.log('Generator');
    console.log('Generator');
    yield 'Shaon';
    yield 4;
    yield 'Rahi';
    yield 'Ovi';
    yield 'Hello World';
}

let gnr = genFunction();

console.log(gnr.next().value);
console.log(gnr.next().value);
