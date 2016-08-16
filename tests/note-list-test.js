var modules = require("./modules");

function testStoresAllNotesInAnArray(){
var listOfNotes = new ListOfNotes();

if(listOfNotes.notes === undefined ){
  throw new Error('There is no such thing as an array for your notes! Go make one!')
}
};
testStoresAllNotesInAnArray();

function testAnArrayOfNotesIsBeingReturnedWhenCallingGetNotes(){
  var list = new ListOfNotes();
  if (list.getNotes() !== list.notes ){
    throw new Error('No notes has been returned');

  }
};
testAnArrayOfNotesIsBeingReturnedWhenCallingGetNotes();


function testAnArrayOfNotesIsBeingReturnedWhenCallingGetNotes(){
  var list = new ListOfNotes();
  list.createNote();
  if (list.notes.isEmpty){
    throw new Error('No notes has been returned');

  }
};
testAnArrayOfNotesIsBeingReturnedWhenCallingGetNotes();
