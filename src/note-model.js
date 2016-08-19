(function(exports){

  function Note(note){
    this.saveNote = note;
  }

  Note.prototype.showNote = function () {
    return this.saveNote;
  };

  exports.Note = Note;

})(this);
