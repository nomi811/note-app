(function(exports) {

  function NoteView(note) {
    this._note = note;
  }

  NoteView.prototype.printNoteHTML = function() {
    return '<div>' + this._note.showNote() + '</div>';
  };

  exports.NoteView = NoteView;
})(this);
