var test = require("./test");
var Note = require("./note-model");

function testNoteStoresText() {
  var note = new Note("some text");
  test.isTrue(note.text === "some text");
}

function testNoteReturnsText() {
  var note = new Note("some text");
  test.isTrue(note.returnNoteText === "some text");
}

testNoteStoresText();
testNoteReturnsText();
