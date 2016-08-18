it('NoteController can modify HTML on the document', function() {
  var noteList = new NoteList();
  noteList.store('Favourite drink: seltzer');
  var newView = new ListView(noteList);
  var noteController = new NoteController(noteList);
  var element = document.createElement('div', {id: 'app'});
  noteController._getAppDiv = function() {
    return element;
  };
  noteController.insertHTML();
  isTrue(noteController._getAppDiv().innerHTML === newView.printListHTML());
});
