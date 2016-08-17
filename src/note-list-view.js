(function(exports) {

  function ListView(list) {

    this.listOfNotes = list;
  }

  ListView.prototype.turnIntoHtml = function () {

    var wholeHtmlString = "<ul>" + this.listingFunction(this.listOfNotes) + "</ul>";
    return wholeHtmlString;

  };

  ListView.prototype.listingFunction = function(someList) {

    var stringArray = [];
    someList.getAllNotes().forEach(function(note) {
      stringArray.push("<li><div>" + note.text + "</div></li>");
    });
    return stringArray.join("");

  };

  exports.ListView = ListView;

})(this);
