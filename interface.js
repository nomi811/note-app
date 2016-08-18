var noteList = new noteList();
noteList.createNote("I love node more than I love Ruby");
noteList.createNote("I will be a coding genius one day I promise");
var noteController = new NoteController(noteList);
noteController.getHTML();
