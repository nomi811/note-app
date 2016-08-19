(function(exports){

  function List(){
    this.listArr = [];
  }

  List.prototype.store = function(note) {
    var noteItem = new Note(note);
    this.listArr.push(noteItem);
  };

  List.prototype.returnNotes = function() {
    return this.listArr;
  };

  exports.List = List;

})(this);
