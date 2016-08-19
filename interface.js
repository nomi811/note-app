var list = new List();
list.store("I love node more than I love Ruby");
list.store("I will be a coding genius one day I promise");
var noteController = new NoteController(List);
noteController.printListHTML();
