var list, noteOne, noteTwo, addHTML, listView;


function listViewSetup() {
  list = new List();
  listView = new ListView(list);
}
  listViewSetup();

it('ListView shows one note', function() {
  addHTML = '<ul><li><a href="#3"><div>Hello</div></a></li>';
  noteOne = 'Hello';
  list.store(noteOne);
  isTrue(listView.htmlList() === addHTML + '</ul>');
});

it('ListView shows many notes', function() {
  noteTwo = 'Goodbye';
  list.store(noteTwo);
  addHTML += '<li><a href="#4"><div>Goodbye</div></a></li>';
  console.log(listView.htmlList());
  isTrue(listView.htmlList() === addHTML + '</ul>');
});

it('Listview only shows 20 characters per note', function() {
  var noteThree = 'This is a very, very, very long string';
  list.store(noteThree);
  addHTML += '<li><a href="#5"><div>This is a very, very</div></a></li>';
  isTrue(listView.htmlList() === addHTML + '</ul>');
});
