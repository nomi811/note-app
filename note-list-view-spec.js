//1. Code in a file called note-list-view.js.

//2. Takes a note list model upon instantiation.

//3. Has a method that, when called, returns a string of HTML that represents the note list model.
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
//4. Handles a note list model that has no notes, one note or several notes.
var assert = require("./assert").assert;
var noteList = require('./note-list-model').noteList;
var ListView = require('./note-list-view').ListView;

function testViewingNoteList() {
  var list = new noteList();
  list.createNote("winter is coming");
  list.createNote("hear me roar");
  var listView = new ListView(list);
  assert.isTrue(listView.turnIntoHtml() === "<ul><li><div>winter is coming</div></li><li><div>hear me roar</div></li></ul>");
}

testViewingNoteList();
