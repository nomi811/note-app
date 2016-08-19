it('Note saves text when created', function() {
  var myNote = 'Hello';
  var note = new Note(myNote);
  isTrue(note.showNote() === myNote);
});
