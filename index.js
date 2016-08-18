var list = new noteList();
noteList.store('Favourite drink: seltzer');
var noteController = new NoteController(noteList);
noteController.insertHTML();
