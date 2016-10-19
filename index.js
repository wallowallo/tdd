// console.log("hello world");
// const cows = require('cows');
//
// //cows();
// console.log(cows()[1]);
 module.exports = function(arg) {
   if(arg === 3) {
     return "3a";
   }
   if(arg === 4) {
     return "4a";
   }
   if (arg > 10) {
     return arg + "b";
   }
  return 2;
 }

function fibonacciSeq(number) {
  var i;
  var fibonacciSequence = [];

  fibonacciSequence[0] = 0;
  fibonacciSequence[1] = 1;
  for(i = 2; i <= 10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
  }
    if(fibonacciSeq >= number) {
      return;
  }
}
