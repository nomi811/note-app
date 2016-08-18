(function(exports){

  function Note(text){
    this.saveNote = text;
  }

  Note.prototype.showNote = function () {
    return this.saveNote;
  };

  exports.Note = Note;

})(this);
