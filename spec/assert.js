/*jshint evil: true */

(function(exports) {

  function it(description, codeToCheck) {
    try {
      codeToCheck();
      document.write('<span style="color:green">' + description + '</span><br>');
      }
      catch (testError) {
      document.write('<span style="color:red;">' + description + "</span><br>");
      document.write('<p style="color:red;">' + testError.stack + "</p>");
    }
  }

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      document.write("<span style='color:green;'>"  + "Correct!</span><br>");
    }
  }

  exports.it = it;
  exports.isTrue = isTrue;

})(this);
