(function(exports) {



  function Note (txt){
    this.txt = txt;
  }

  Note.prototype.getTxt = function () {
    return this.txt;
  };
  module.exports = Note;
})(this);
