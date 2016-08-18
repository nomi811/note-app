(function(exports) {
  function NoteController(notelist) {
    this.noteListView = new ListView(noteList);
  }


  NoteController.prototype._getAppDiv = function() {
      return document.getElementById('app');
  };

  NoteController.prototype.insertHTML = function() {
    this._getAppDiv().innerHTML = this.noteListView.printListHTML();
  }; 

  exports.NoteController = NoteController;
})(this);
