(function(exports) {

  function ListView(list) {
    this.listView = list;
  }

  ListView.prototype.turnIntoHtml = function () {
    var listToHtml = this.listView.getAllNotes()
    var mappedList = listToHtml.map(function(note){
      return '<li><div>' + note.returnNoteText() + '</div></li>'
    });
    return '<ul>' + mappedList.join('') + '</ul>'
  };


  exports.ListView = ListView;

})(this);
