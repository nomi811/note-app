var assert = require("./assert").assert;
//var isTrue =  require("./assert").isTrue;
var Note = require("./note-model").Note;

function testNoteStoresText() {
  var note = new Note("some text");
  assert.isTrue(note.text === "some text");
  // isTrue(note.text == "some text")
}

function testNoteReturnText() {
  var note = new Note("some text");
  assert.isTrue(note.returnNoteText() === "some text");
}

testNoteStoresText();
testNoteReturnText();
