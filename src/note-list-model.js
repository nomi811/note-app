(function(exports){

  function noteList(){
    this.notes = [];
  }

  noteList.prototype.createNote = function(note) {
    var noteItem = new Note(note);
    this.notes.push(noteItem);
  };

  noteList.prototype.getAllNotes = function() {
    return this.notes;
  };

  exports.noteList = noteList;

})(this);
