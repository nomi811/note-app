function testNoteStoresText() {
  var note = new Note("some text");
  if (note.text === "some text") {
    console.log("testNoteStoresText: passed");
  } else {
    console.log("testNoteStoresText: failed");
  }
}

function testNoteReturnText() {
  var note = new Note("some text");
  if (note.returnNoteText() === "some text") {
    console.log("testNoteReturnText: passed");
  } else {
  console.log("testNoteReturnText: failed");
}
}

testNoteStoresText();
testNoteReturnText();
