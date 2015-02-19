//function getRandomNumber( upper ) {
//  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
//  return randomNumber;
//}
//
////alert( getRandomNumber(6));
////alert( getRandomNumber(100));
////alert( getRandomNumber(1300));
//
//function getArea(width, length, unit) {
// var area = width * length;
//    return area + " " + unit;
//}
//
//console.log( getArea(10,20, 'sq ft.'));

function getRandomNumber(lower, upper) {
        
if ( isNaN(lower) || isNaN (upper)) {
    throw new Error('Both Arguments must be Numbers');
    }
    return Math.floor( Math.random() * (upper - lower + 1)) + lower;

}
console.log(getRandomNumber(100, 200 ));
console.log(getRandomNumber('nine', 200 ));
console.log(getRandomNumber(100, 200 ));
console.log(getRandomNumber('one-hundred', 200 ));