(function(exports) {

  function ListView(list) {
    this._listView = list;
  }

  ListView.prototype.htmlList = function () {
    var listToHTML = this._listView.returnNotes();
    var mappedList = listToHTML.map(function(note) {
      return '<li><div>' + note.showNote().slice(0, 20) + '</div></li>';

    });

    return '<ul>' + mappedList.join('') + '</ul>';
  };


  exports.ListView = ListView;

})(this);
