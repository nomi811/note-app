var Note = require('./note-model').Note;

(function(exports){

function noteList(){
  this.notes = [];

noteList.prototype.createNote = function(text) {
  note = new Note(text);
  this.notes.push(note);
};

noteList.prototype.getAllNotes = function () {
  return this.notes;
};

}
exports.noteList = noteList;

})(this);
