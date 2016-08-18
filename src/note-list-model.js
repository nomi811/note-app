(function(exports){

  function NoteList(){
    this.listArr = [];
  }

  NoteList.prototype.store = function(note) {
    this.listArr .push(new Note(note));
  };

  NoteList.prototype.list = function() {
    return this.listArr;
  };

  exports.NoteList = NoteList;

})(this);
