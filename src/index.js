module.exports = function reverse (n) {

    function reversePositiveNumber(number){
      let arrOfDigits = number.toString().split("");
    return +arrOfDigits.reduceRight(function (previousValue, currentValue, index, array) {
      return previousValue + currentValue;
    },)
    }

  if (n < 0) {

    return - reversePositiveNumber(Math.abs(n));
  } else {
    return reversePositiveNumber(n);
  }
   

}
