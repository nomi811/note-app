var noteList = new noteList();
noteList.store("I love node more than I love Ruby");
noteList.store("I will be a coding genius one day I promise");
var noteController = new NoteController(noteList);
noteController.insertHTML();
