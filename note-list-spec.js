// 1. Stores an array of note models.this.notes = []

//2. Has a method that will return all the note models stored in the array.

// 3. Has a method that creates a new note model
// and stores it. This function
// takes the text of a note as an argument.



var assert = require("./assert").assert;
var noteList = require("./note-list-model").noteList;

function testHasArrayOfNotes (){
  var list = new noteList();
assert.isTrue(list.notes.length === 0);
}

function testReturnsArrayofNotes (){
  var list = new noteList();
  list.createNote('text');

  assert.isTrue(list.getAllNotes()[0].text === "text");
}


function testCreatesNewNoteModel(){
  var list = new noteList();
  list.createNote('text');
  assert.isTrue(list.notes.length === 1);
  assert.isTrue(list.notes.includes('text'));
}

testHasArrayOfNotes();
testCreatesNewNoteModel();
testReturnsArrayofNotes();
