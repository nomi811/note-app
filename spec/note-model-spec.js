var myNote, note;

it('Note saves text when created', function() {
  myNote = 'Hello';
  note = new Note(myNote);
  isTrue(note.showNote() === myNote);
});

it('Note has a unique id', function() {
  isTrue(note.noteId === 0);
});
