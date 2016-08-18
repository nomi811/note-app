(function(exports) {

  function it(description, codeToCheck) {
    document.writeln("<b>" + description + "</b>");
    try {
      codeToCheck();
    } catch (testError) {
      console.log(testError);
      document.writeln('<p style="color:red;">' + testError.stack + "</p>");
    }
  }

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
    } else {
      document.writeln("<div style='color:green;'>"  + "Correct!</div><br>");
    }
  }

  exports.it = it;
  exports.isTrue = isTrue;

})(this);
