var noteList = new NoteList();

it('NoteList stores notes', function() {
  var noteOne = "Hello World!";
  var noteTwo = 'Coding is great!';

  noteList.store(noteOne);
  noteList.store(noteTwo);

  var testList = noteList.list();
  var validateFirstNote = (testList[0].showNote() === noteOne);
  var validateSecondNote = (testList[1].showNote() === noteTwo);
  isTrue(validateFirstNote === validateSecondNote);
});
