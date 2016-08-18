it('Note saves text when created', function() {
  var note = new Note('Hello');
  isTrue(note.showNote() === 'Hello');
});
