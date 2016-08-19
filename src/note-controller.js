(function(exports) {
  function NoteController(view) {
    this._view = view;
  }


  NoteController.prototype.printList = function() {
    var listView = new ListView(this._view);
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = listView.htmlList();
  };

  exports.NoteController = NoteController;
})(this);
