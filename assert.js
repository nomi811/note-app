
(function(exports){

  function isTrue(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error ("Test failed:" + assertionToCheck);
    } else {
    throw new Error("Test passed:" + assertionToCheck);
    }
  }
  exports.assert = {
      isTrue: isTrue
    };

})(this);
