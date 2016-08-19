var note, singleView;

function setupSingleView() {
  note = new Note('Hello there');
  singleView = new SingleNoteView(note);
}

it('can be instantiated with a single note instance', function() {
  setupSingleView();
  isTrue(singleView._note === note);
});

it('SingleNote displays a note in HTML', function() {
  setupSingleView();
  var expectedHTML = '<div>Hello there</div>';
  isTrue(singleView.printNoteHTML() === expectedHTML);
});
