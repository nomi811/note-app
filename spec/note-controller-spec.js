function testNoteControllerPrintHTML() {
  var list = new noteList();
  list.createNote('Happy Days!');
  var noteController = new NoteController(list);

  var appDiv = document.createElement('div', {id: 'app'});
    document.getElementById = function(){
      return appDiv;
    }


  var listView = new ListView(list);

  noteController.getHTML();



  if (appDiv.innerHTML === listView.turnIntoHtml()) {
    console.log("printHTML: notecontroller prints HTML: passed");
  } else {
    console.log("printHTML: notecontroller prints HTML: failed");
  }

}

testNoteControllerPrintHTML();
