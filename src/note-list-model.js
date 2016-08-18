(function(exports){

  function noteList(){
    this.notes = [];
  }

  noteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.notes.push(note);
  };

  noteList.prototype.getAllNotes = function () {
    return this.notes;
  };

  exports.noteList = noteList;

})(this);
