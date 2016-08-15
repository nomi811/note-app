// *** this first one works in the browser but not in node:
// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//
//   function exclaim(string) {
//     return string + repeat("!", EXCLAMATION_MARK_COUNT);
//   }
//
//   exports.exclaim = exclaim;
// })(this);

//**** this one works in node and the browser.
//We have injected the repeat function into exclaim.

(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5;

  function exclaim(repeat, string) {
    return string + repeat("!", EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim = exclaim;
})(this);









// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//   function exclaim(string) {
//     return string + repeat("!", EXCLAMATION_MARK_COUNT);
//   };
//   // function hello(string) {
//   //   return string + "?".repeat(5);
//   // }
//
//   exports.exclaim = exclaim;
//   // exports.hello = hello;
// })(this);
