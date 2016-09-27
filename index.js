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
