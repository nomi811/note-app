(function(exports) {
  function NoteController(list) {
    this.list = list;
  }


  NoteController.prototype.getHTML = function() {
    var listView = new ListView(this.
      list);
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = listView.turnIntoHtml();
  };

  exports.NoteController = NoteController;
})(this);
