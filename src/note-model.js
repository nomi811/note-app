(function(exports){
  var counter = 0;

  function Note(note){
    this.saveNote = note;
    this.noteId = counter++;
  }

  Note.prototype.showNote = function () {
    return this.saveNote;
  };

  exports.Note = Note;

})(this);
