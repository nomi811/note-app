var modules = require("./modules");

var Note = modules.Note;
var assert = modules.assert;


function testTextIsReturnedWhenCallingGetTxt(){
  var note = new Note('Hello');
  assert.isTrue(note.getTxt() === 'Hello' );
}

testTextIsReturnedWhenCallingGetTxt();
