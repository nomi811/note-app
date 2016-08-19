var list, noteOne, noteTwo, addHTML, listView;


function listViewSetup() {
  noteOne = 'Hello';
  list = new List();
  list.store(noteOne);
}

it('ListView shows one note', function() {
  listViewSetup();
  addHTML = '<ul><li><div>Hello</div></li>';
  listView = new ListView(list);
  isTrue(listView.htmlList() === addHTML + '</ul>');
});

it('ListView shows many notes', function() {
  noteTwo = 'Goodbye';
  list.store(noteTwo);
  listView = new ListView(list);
  listViewSetup();
  addHTML += '<li><div>Goodbye</div></li>';
  isTrue(listView.htmlList() === addHTML + '</ul>');
});

it('Listview only shows 20 characters per note', function() {
  noteTwo = 'Goodbye';
  list.store(noteTwo);
  var noteThree = 'This is a very, very, very long string';
  list.store(noteThree);
  addHTML += '<li><div>This is a very, very</div></li>';
  listView = new ListView(list);
  listViewSetup();
  isTrue(listView.htmlList() === addHTML + '</ul>');
});
