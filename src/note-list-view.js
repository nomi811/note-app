(function(exports) {

  function ListView(list) {
    this.view = list;
  }

  ListView.prototype.htmlList = function () {
    var listToHTML = this.view.returnNotes();
    var mappedList = listToHTML.map(function(note) {
      return '<li><a href="#' + note.noteId + '"><div>' + note.showNote().slice(0, 20) + '</div></a></li>';

    });
    return '<ul>' + mappedList.join('') + '</ul>';
  };


  exports.ListView = ListView;

})(this);
