it('ListView shows one note', function() {
  var testList = new NoteList();
  var noteOne = 'Hello';
  testList.store(noteOne);
  var listView = new ListView(testList);
  var addHTML = '<ul><li><div>Hello</div></li></ul>';
  console.log('#1' + listView.printListHTML());
  console.log('#2' + addHTML);
  isTrue(listView.printListHTML() === addHTML);
});
