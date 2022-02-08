//=============Function===============

const productInfo1 = {
    productName : "Mobile",
    productPrice : 40,
    productQuantity : 2,
    isAvailabe : true
}

const productInfo2 = {
    productName : "Computer",
    productPrice : 100,
    productQuantity : 4,
    isAvailabe : true
}

const productInfo3 = {
    productName : "Laptop",
    productPrice : 500,
    productQuantity : 3,
    isAvailabe : true
}

function showProductInfo(productDetails){
    return `productName = ${productDetails.productName}, productPrice = ${productDetails.productPrice}, quantity = ${productDetails.productQuantity}, isAvailable = ${productDetails.isAvailabe}`;
}

const mobileInfo = showProductInfo(productInfo1);
const computerInfo = showProductInfo(productInfo2);
const laptopInfo = showProductInfo(productInfo3);

console.log(mobileInfo);
console.log(computerInfo);
console.log(laptopInfo);

