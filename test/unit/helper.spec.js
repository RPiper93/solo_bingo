countSpaces = function(object, row){
  var count = 0
  for (var i in object[row]) {
    if (object[row][i] === ' ') {
      count += 1;
    };
  };
  return count;
}