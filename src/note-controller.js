(function(exports) {
  function NoteController(view) {
    this._listView = view;
  }

  NoteController.prototype._getAppDiv = function() {
    return document.getElementById('app');
  };

  NoteController.prototype.printList = function() {
    this._getAppDiv().innerHTML = this._listView.htmlList();
  };

  exports.NoteController = NoteController;
})(this);
