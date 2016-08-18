function viewSingleNote() {
  var note = new Note('Favourite drink: seltzer');
  var noteView = new NoteView(note);
  isTrue(noteView.printNoteHTML() === '<div>Favourite drink: seltzer</div>');
}

viewSingleNote();
