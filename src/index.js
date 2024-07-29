module.exports = function reverse (n) {
 

   let arrOfDigits = number.toString().split("");
   return +arrOfDigits.reduceRight(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  },)

}
