

it('List stores notes', function() {
  var noteOne = "Hello World!";
  var noteTwo = 'Coding is great!';

  var list = new List();

  list.store(noteOne);
  list.store(noteTwo);

  var testList = list.returnNotes();
  isTrue(testList.length === 2);
  isTrue(testList[0].showNote() === noteOne);
  isTrue(testList[1].showNote() === noteTwo);
});
