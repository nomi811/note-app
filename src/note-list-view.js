(function(exports) {

  function ListView(notelist) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    addHTML = '<ul>';
    this.noteList.list().forEach(function(note) {
      var shortNote = note.showNote().substring(0, 20);
      addHTML += '<li><div>' + shortNote + '</div></li>';
    });
    addHTML += '</ul>';
    return addHTML;
  };


  exports.ListView = ListView;

})(this);
