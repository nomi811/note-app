it('NoteController can modify HTML on the document', function() {
  var list = new List();
  list.store('Favourite drink: seltzer');
  var newView = new ListView(list);
  var noteController = new NoteController(list);
  var element = document.createElement('div', {id: 'app'});
  noteController._getAppDiv = function() {
    return element;
  };
  noteController.printList();
  isTrue(noteController._getAppDiv().innerHTML === newView.htmlList());
});
