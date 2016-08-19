(function(exports) {

  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.printNoteHTML = function() {
    return '<div>' + this._note.showNote() + '</div>';
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
