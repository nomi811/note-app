var list, noteOne, noteTwo;


function listViewSetup() {
  noteOne = 'Hello';
  noteTwo = 'Goodbye';
  list = new List();
  list.store(noteOne);
  list.store(noteTwo);

}

it('ListView shows one note', function() {
  listViewSetup();
  var addHTML = '<ul><li><div>Hello</div></li></ul>';
  var listView = new ListView(list);
  isTrue(listView.htmlList() === addHTML);
});

it('ListView shows many notes', function() {
  listView = new ListView(list);
  listViewSetup();
  var addHTML = '<ul><li><div>Hello</div></li></ul><ul><li><div>Goodbye</div></li></ul>';
  isTrue(listView.htmlList() === addHTML);
});

it('Listview only shows 20 characters per note', function() {
  listView = new ListView(list);
  listViewSetup();
  var noteThree = 'This is a very, very, very long string';
  list.store(noteThree);
  var addHTML = '<ul><li><div>This is a very, very</div></li></ul>';
  isTrue(listView.htmlList() === addHTML);
});
