// function changeText(text)
// {
//  element = document.getElementById('app');
//  element.innerHTML = text;
// };
//
// changeText('howdy');
function ListOfNotes(){
  this.notes = [];

};

ListOfNotes.prototype.getNotes = function(){
  return this.notes;

};

ListOfNotes.prototype.createNote = function(txt) {
  var note = new Note(txt);
  this.notes.push(note);
};
function NoteController() {
  this.list = new listOfNotes();
}
