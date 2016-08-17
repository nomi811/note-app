//1. Code in a file called note-list-view.js.

//2. Takes a note list model upon instantiation.

//3. Has a method that, when called, returns a string of HTML that represents the note list model.
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
//4. Handles a note list model that has no notes, one note or several notes.
function testViewingNoteList() {
  var list = new noteList();
  list.createNote("hello");
  list.createNote("nomi");
  var listView = new ListView(list);
  if (listView.turnIntoHtml() ===
   "<ul><li><div>hello</div></li><li><div>nomi</div></li></ul>" ) {
    console.log("testViewingNoteList:passed");
  }
  else {
    console.log("testViewingNoteList:failed");
  }
}

testViewingNoteList();
