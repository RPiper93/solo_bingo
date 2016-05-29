bingoApp.factory('BingoNumberFactory', function(){
  var Number = function(number){
    this.amount = number;
    this.marked = false;
  };

  Number.prototype.mark = function(checkNumber){
    if (checkNumber === this.amount){
      this.marked = true;
    };
  };

  return Number;
});